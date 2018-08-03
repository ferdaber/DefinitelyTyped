import { aql, db, query } from "@arangodb";
import { md5 } from "@arangodb/crypto";
import { createRouter } from "@arangodb/foxx";
import sessionsMiddleware = require("@arangodb/foxx/sessions");
import jwtStorage = require("@arangodb/foxx/sessions/storages/jwt");
import cookieTransport = require("@arangodb/foxx/sessions/transports/cookie");

console.warnStack(new Error(), "something went wrong");

interface User {
    username: string;
    password?: string;
}
const coll = module.context.collection("users")!;
coll.save({ username: "user" });
const doc = coll.any();
console.log(doc.username);

const users = coll as ArangoDB.Collection<User>;
const admin = users.firstExample({ username: "admin" })!;
users.update(admin, { password: md5("hunter2") });
console.logLines("user", admin._key, admin.username);

db._query(aql`
    FOR u IN ${users}
    RETURN u
`);

interface Banana {
    color: string;
    shape: {
        type: string;
        coords: string[];
    };
}

const bananas = db._createDocumentCollection("bananas", {
    waitForSync: false,
    keyOptions: {
        type: "autoincrement",
        increment: 11,
        offset: 23
    }
}) as ArangoDB.Collection<Banana>;
bananas.ensureIndex({
    type: "hash",
    unique: true,
    fields: ["color", "shape.type"]
});
bananas.updateByExample(
    bananas.any(),
    { shape: { type: "round" } },
    { mergeObjects: true }
);
bananas.ensureIndex({
    type: "geo",
    fields: ["latLng"]
});

const router = createRouter();
module.context.use(router);

router.get("/", (req, res) => {
    if (req.cookie("sid", { secret: "keyboardcat" })) {
        res.set("content-type", "text/plain");
        res.write("Welcome back, Commander");
    } else {
        res.json({ success: false });
    }
});

router.use((req, res, next) => {
    if (req.is("json")) res.throw("too many requests");
    next();
});

router.use(
    sessionsMiddleware({
        storage: jwtStorage({ algorithm: "none" }),
        transport: "header"
    })
);
router.use(
    sessionsMiddleware({
        storage: jwtStorage({ algorithm: "HS512", secret: "tacocat" }),
        transport: cookieTransport({ secret: "banana", algorithm: "sha256" })
    })
);

console.log(
    query`
        FOR u IN users
        ${aql.literal(
            Math.random() < 0.5 ? "FILTER u.admin" : "FILTER !u.admin"
        )}
        RETURN u
    `.toArray()
);

const view = db._view("yolo")!;
view.properties({
    locale: "C",
    commit: {
        consolidate: {
            bytes: { segmentThreshold: 20 }
        }
    }
});

import { GraplixSchema } from "graplix";
import { MyTypeMap } from "./schema.types";

const schema: GraplixSchema<MyTypeMap> = {
  User: {},
  System: {
    owner: {
      type: "User",
    },
    member: {
      type: "User",
    }
  },
  Company: {
    parent: {
      type: "System",
    },
    owner: {
      type: "User",
    },
    member: {
      type: "User",
    },
    viewer: [
      { when: "member" },
      { when: "owner" },
      { when: "owner", from: "parent" }, // system의 owner ( 시스템 매니저 )
    ],
    editor: [
      { when: "owner" },
      { when: "owner", from: "parent" }, // system의 owner ( 시스템 매니저 )
    ],
  },
  Application: {
    parent: {
      type: "Company",
    },
    owner: {
      type: "User",
    },
    member: {
      type: "User",
    },
    viewer: [
      { when: "member" },
      { when: "owner" },
      { when: "owner", from: "parent" }, // company의 owner ( 권한 상속 )
    ],
    editor: [
      { when: "owner" },
      { when: "owner", from: "parent" }, // company의 owner ( 권한 상속 )
    ],
  },
  Key: {
    parent: {
      type: "Application",
    },
    owner: {
      type: "User",
    },
    member: {
      type: "User",
    },
    viewer: [
      { when: "member" },
      { when: "owner" },
      { when: "owner", from: "parent" }, // application의 owner ( 권한 상속 )
    ],
    editor: [
      { when: "owner" },
      { when: "owner", from: "parent" }, // application의 owner ( 권한 상속 )
    ],
  },
};

export default schema;
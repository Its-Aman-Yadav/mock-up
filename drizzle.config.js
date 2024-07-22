/** @type { import("drizzle-kit").Config } */

export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql', 
    dbCredentials: {
      url: 'postgresql://mock_owner:FNCnMBQ47mjZ@ep-rapid-leaf-a1kbo0dd.ap-southeast-1.aws.neon.tech/mock?sslmode=require',
    }
  };
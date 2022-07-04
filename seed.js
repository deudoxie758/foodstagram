const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();
async function main() {
  await prisma.users.createMany({
    data: [
      {
        first_name: "Darnell",
        last_name: "Eudoxie",
        username: "deudoxie",
        email: "darnell@darnell.com",
        phone: "1234567890",
        dob: new Date("12/12/12"),
        bio: "With that being said byyyyyyee",
      },
      {
        first_name: "Tyna",
        last_name: "Eudoxie",
        username: "teudoxie",
        email: "tyna@darnell.com",
        phone: "1234567891",
        dob: new Date("11/11/11"),
        bio: "No",
      },
      {
        first_name: "Delsha",
        last_name: "William",
        username: "delshwilliam",
        email: "delsha@tyna.com",
        phone: "1230123456",
        dob: new Date("08/01/12"),
        bio: "Hi my name is Delsh",
      },
      {
        first_name: "Kevin",
        last_name: "Samuel",
        username: "ks758",
        email: "kevin@samuel.com",
        phone: "1112223334",
        dob: new Date("02/12/02"),
        bio: "Welcome to my youtube chunel",
      },
      {
        first_name: "Bing",
        last_name: "Bong",
        username: "bingbong",
        email: "bing@bong.com",
        phone: "1758775642",
        dob: new Date("11/05/98"),
        bio: "Bing bong",
      },
    ],
  });
}
main();

// This file contains placeholder data that you'll be replacing with real data in the Data Fetching from supabase db:

const organization = [
  {
    organization_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "Organization sample 1",
    website: "www.google.com",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla convallis convallis. Vestibulum ligula elit, mattis ac velit nec, pretium bibendum purus. Sed pulvinar leo et nulla mollis pretium sit amet eget libero. Fusce ut enim vel est hendrerit dapibus. Nam a ornare justo, vitae gravida ligula. Nunc a ligula in turpis faucibus commodo. Vestibulum tempor in augue eget tincidunt. Mauris vestibulum fringilla justo, gravida tempus diam egestas quis. Praesent eu efficitur orci. Ut et elit tellus. Duis nec arcu diam. In hac habitasse platea dictumst. Proin suscipit nulla urna, non sagittis augue tincidunt a. Quisque faucibus lectus vel nisl dignissim ultricies. Pellentesque gravida, justo sed iaculis interdum, quam ligula rutrum urna, ut finibus orci ligula in massa. \nVestibulum vulputate sollicitudin tellus nec pretium. Nam in risus a velit tempus tempor quis nec quam. Duis scelerisque lacinia metus, vel varius ipsum viverra in. Duis efficitur est nibh, vitae congue odio pretium ut. Sed cursus lacus nec lectus dictum, sed commodo sapien lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi.\n Aliquam ut euismod dui, eu gravida quam. Praesent placerat vitae orci ut facilisis. Pellentesque risus nibh, sollicitudin ut urna vel, lobortis condimentum tellus. Aenean turpis massa, luctus vitae mauris eget, mattis tempus eros. Sed mi dui, porta quis luctus id, venenatis vel nibh. Cras euismod ligula mauris, sit amet interdum erat sagittis ut. Donec porta, nulla et scelerisque hendrerit, massa leo congue diam, in volutpat mauris dolor ac mi. Mauris vehicula nunc elit, at lobortis purus mattis at. Sed felis lacus, luctus sed erat et, venenatis sagittis lorem. Nunc ultrices risus non volutpat dignissim. Suspendisse pretium scelerisque risus, vel porta dui faucibus non.\nAliquam ultricies dignissim dui, vel pulvinar leo interdum vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum pharetra, orci ac faucibus fermentum, mauris nisl interdum arcu, quis fringilla leo tortor ut nibh. Integer convallis finibus neque at convallis. Ut ut tincidunt tortor. Nam at imperdiet massa, sit amet dapibus metus. Sed pulvinar mollis metus. Praesent id massa justo. Suspendisse convallis massa turpis, eu lacinia magna tincidunt eu. Cras nec posuere eros, eget lobortis",
    legal_status: "private",
    affiliation: "lorem",
    functional_role: "ipsum",
    sector_focus: "Software",
    scope: "Canada",
  },
];

const customers = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    image_url: "/customers/delba-de-oliveira.png",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Lee Robinson",
    email: "lee@robinson.com",
    image_url: "/customers/lee-robinson.png",
  },
  {
    id: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
    name: "Hector Simpson",
    email: "hector@simpson.com",
    image_url: "/customers/hector-simpson.png",
  },
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    name: "Steven Tey",
    email: "steven@tey.com",
    image_url: "/customers/steven-tey.png",
  },
  {
    id: "3958dc9e-787f-4377-85e9-fec4b6a6442a",
    name: "Steph Dietz",
    email: "steph@dietz.com",
    image_url: "/customers/steph-dietz.png",
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Michael Novotny",
    email: "michael@novotny.com",
    image_url: "/customers/michael-novotny.png",
  },
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c66",
    name: "Emil Kowalski",
    email: "emil@kowalski.com",
    image_url: "/customers/emil-kowalski.png",
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    name: "Amy Burns",
    email: "amy@burns.com",
    image_url: "/customers/amy-burns.png",
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    name: "Balazs Orban",
    email: "balazs@orban.com",
    image_url: "/customers/balazs-orban.png",
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: "paid",
    date: "2022-10-29",
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: "paid",
    date: "2023-09-10",
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: "pending",
    date: "2023-08-05",
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: "pending",
    date: "2023-07-16",
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: "pending",
    date: "2023-06-27",
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: "paid",
    date: "2023-06-09",
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: "paid",
    date: "2023-06-17",
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: "paid",
    date: "2023-06-07",
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: "paid",
    date: "2023-08-19",
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: "paid",
    date: "2023-06-03",
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: "paid",
    date: "2023-06-18",
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: "paid",
    date: "2023-10-04",
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: "paid",
    date: "2022-06-05",
  },
];

const revenue = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2200 },
  { month: "Apr", revenue: 2500 },
  { month: "May", revenue: 2300 },
  { month: "Jun", revenue: 3200 },
  { month: "Jul", revenue: 3500 },
  { month: "Aug", revenue: 3700 },
  { month: "Sep", revenue: 2500 },
  { month: "Oct", revenue: 2800 },
  { month: "Nov", revenue: 3000 },
  { month: "Dec", revenue: 4800 },
];

module.exports = {
  users,
  customers,
  invoices,
  revenue,
};

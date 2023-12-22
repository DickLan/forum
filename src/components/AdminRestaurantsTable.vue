<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <a href="#" class="btn btn-link">Show</a>

          <router-link
            to="{
            name:'admin-restaurant-edit,
            params: {
            id:restaurant.id
              }}"
            class="btn btn-link"
            >Edit</router-link
          >

          <button
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
            type="button"
            class="btn btn-link"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Vicente Schiller",
      tel: "139-934-2455",
      address: "39523 Frank Mill",
      opening_hours: "08:00",
      description: "explicabo",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.76423185014346",
      viewCounts: 2,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-21T03:29:33.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 2,
      name: "Miss Hassie Spinka",
      tel: "(922) 001-2760 x91030",
      address: "826 Eulah Locks",
      opening_hours: "08:00",
      description:
        "Dolorum qui voluptatem voluptas. Animi illo in quis odio. Similique at cum rerum at dolor aut eum dolor.\n \rEligendi assumenda sint. Aut maxime occaecati nulla molestiae dolores quidem. Similique aspernatur veniam quibusdam dolorem beatae illo quia. Quibusdam et provident ut quas aut sit laborum natus. Nihil ullam in qui sint placeat officiis nemo aliquam.\n \rTempora eum ut vel id tenetur quia. Odio et accusamus blanditiis velit explicabo modi. Aut qui iste.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=13.392510449052942",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 3,
      name: "Ari Schmitt",
      tel: "(321) 474-6639 x1123",
      address: "93727 Meda Way",
      opening_hours: "08:00",
      description: "Reprehenderit labore nobis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=70.26835768963358",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 4,
      name: "Erwin Sawayn DDS",
      tel: "1-168-676-6357",
      address: "802 Crona Prairie",
      opening_hours: "08:00",
      description:
        "Voluptatum illo hic. Nisi odio ratione animi magni officia quia. Consequatur molestias voluptatem voluptatum sit. Minima vitae sit et et qui similique velit laudantium. Incidunt laborum beatae ex optio enim corrupti minus quam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=5.914028262680193",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 5,
      name: "Brandyn Keeling",
      tel: "262-098-0228",
      address: "719 Davonte Freeway",
      opening_hours: "08:00",
      description: "Quia qui et et molestiae aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=75.86278347442384",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 6,
      name: "Theo Lockman II",
      tel: "1-168-349-8442 x051",
      address: "490 Concepcion Lake",
      opening_hours: "08:00",
      description: "quas",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=15.789957453312375",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 7,
      name: "Isaiah Jacobi",
      tel: "922-292-7612",
      address: "78074 Luther Keys",
      opening_hours: "08:00",
      description:
        "Sequi officiis similique magnam. Voluptas omnis et dolore voluptatem animi pariatur ut dolore eligendi. Deleniti non aut et velit itaque architecto accusantium dolorem. Consequuntur harum est ea fugit asperiores est nihil consequatur. Assumenda voluptatem quasi sit at facere excepturi earum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.9188833804987",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 8,
      name: "Marcella O'Reilly IV",
      tel: "851-800-3240 x1633",
      address: "31668 Jillian Islands",
      opening_hours: "08:00",
      description:
        "Deserunt ex rem est. Provident corporis velit facilis quia quis excepturi maxime.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=38.87350453928355",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 9,
      name: "Dr. Yvette Reichel",
      tel: "493.506.3131 x427",
      address: "92891 Isobel Ports",
      opening_hours: "08:00",
      description: "maxime maxime et",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.216765151868891",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 10,
      name: "Scotty Hagenes",
      tel: "(921) 966-6582 x662",
      address: "396 Maude Crest",
      opening_hours: "08:00",
      description:
        "Deserunt sint voluptatibus distinctio dicta occaecati.\nDolorem reiciendis omnis vero dolores voluptatem corrupti eos id.\nTempore voluptatibus aut est.\nSit et deserunt non qui provident magnam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.034192635447123",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 11,
      name: "Peter Gusikowski",
      tel: "118.440.9008 x104",
      address: "81297 Gina Junctions",
      opening_hours: "08:00",
      description:
        "Quaerat maxime aut impedit ut.\nAut inventore similique nihil cum voluptatum numquam temporibus voluptatibus voluptatibus.\nConsequatur harum mollitia dicta sint possimus pariatur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=1.5951620665405786",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 12,
      name: "Kobe Blick",
      tel: "489-154-6576",
      address: "8051 Clemens Canyon",
      opening_hours: "08:00",
      description:
        "Itaque harum animi saepe error voluptate ea dolores ratione.\nQuia voluptatum in maxime exercitationem.\nQui cum est nobis recusandae explicabo veniam illo.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.548341242743236",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 13,
      name: "Annabel Kutch",
      tel: "1-797-458-4874",
      address: "357 Corkery Mission",
      opening_hours: "08:00",
      description:
        "Et dolor ex. Sunt asperiores inventore quo qui delectus mollitia libero eius. Praesentium officia architecto.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=76.14864479599342",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 14,
      name: "Katelin Stehr",
      tel: "(856) 562-0397 x30127",
      address: "2122 Danyka Forest",
      opening_hours: "08:00",
      description:
        "Quos non ullam exercitationem nesciunt quidem dolor nesciunt ratione voluptatem.\nCulpa dolores et.\nAliquam corporis laboriosam vero fuga.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=14.851778016620765",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 15,
      name: "Mr. Dejuan Kiehn",
      tel: "927.751.3093 x0219",
      address: "632 Goyette Springs",
      opening_hours: "08:00",
      description:
        "Nemo neque voluptatem amet odio consequatur ratione excepturi distinctio eius.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.76441451035812",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 16,
      name: "Michele Tromp",
      tel: "(124) 052-4720 x9266",
      address: "83324 Darrick Crest",
      opening_hours: "08:00",
      description:
        "Eveniet dolor quis.\nMolestiae omnis aliquam.\nSed error minima quia est.\nCumque quidem laudantium pariatur delectus maxime error quod et aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=55.800313137437406",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 17,
      name: "Creola Conroy",
      tel: "694.525.3202",
      address: "5882 Lueilwitz Turnpike",
      opening_hours: "08:00",
      description:
        "Aut dignissimos iusto ut asperiores nesciunt unde rerum incidunt ipsa.\nVoluptates quod non.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=15.450396602886517",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 18,
      name: "Dr. Kian Mraz",
      tel: "380-586-8280 x620",
      address: "4945 Williamson Unions",
      opening_hours: "08:00",
      description: "Labore fugiat mollitia rerum quae voluptatem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=90.2679760801688",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 19,
      name: "Rahsaan Beier",
      tel: "(084) 980-9584 x835",
      address: "9869 Napoleon Crossing",
      opening_hours: "08:00",
      description: "odit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=46.876830123801284",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 20,
      name: "Buck Witting",
      tel: "887.709.7576",
      address: "2893 Donnelly Mews",
      opening_hours: "08:00",
      description:
        "Nihil quam ut quo architecto pariatur qui ab beatae. Mollitia quo sunt est voluptatum. Unde quo veritatis et earum doloremque.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.921371908085796",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 21,
      name: "Miss Sylvan O'Hara",
      tel: "508-796-4707",
      address: "961 Sauer Court",
      opening_hours: "08:00",
      description:
        "Sunt suscipit sunt sit occaecati iusto debitis autem vero est. Aliquam et quidem. Ea saepe et molestias ut ad sunt. Sed et eum esse. Id et rerum sunt assumenda cumque consectetur rerum. Vitae eum beatae quo molestiae facilis est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.68716845103644",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 22,
      name: "Afton Orn Sr.",
      tel: "440.030.3128 x237",
      address: "4349 Legros Haven",
      opening_hours: "08:00",
      description:
        "Modi saepe corrupti.\nQuod et quae eum et quia.\nRecusandae aut distinctio provident temporibus officiis explicabo.\nAutem veniam et perspiciatis nihil a.\nQui iusto et voluptatem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.99205651412352",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 23,
      name: "Hadley Jones",
      tel: "028.438.7624",
      address: "04154 Reyes Cliff",
      opening_hours: "08:00",
      description:
        "Nobis quisquam consequuntur repudiandae quisquam officia maxime.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.83262523825359",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 24,
      name: "Nella Zemlak Sr.",
      tel: "1-557-352-7601 x90164",
      address: "98610 Beryl Ford",
      opening_hours: "08:00",
      description: "Vitae ut quo vel incidunt.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=84.39487644004502",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 25,
      name: "Josiah Price",
      tel: "093.057.4340",
      address: "30940 Kassulke Island",
      opening_hours: "08:00",
      description:
        "Ullam quam aut rerum nesciunt et omnis nobis.\nAut soluta vitae et.\nFacilis quia ut quia quod autem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=5.408595646525782",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 26,
      name: "Christy Beatty",
      tel: "941.430.5244",
      address: "5910 Reilly Motorway",
      opening_hours: "08:00",
      description: "qui incidunt vero",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=21.112988129216003",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 27,
      name: "Brionna Champlin",
      tel: "1-518-844-2092 x23902",
      address: "1962 Joany Tunnel",
      opening_hours: "08:00",
      description:
        "Quia ea voluptatem at autem magni omnis dolores cum. Dignissimos debitis qui ad consectetur ad. Ut tempora sequi iste id dignissimos et neque. Enim a id fuga minus distinctio dolorem ipsam. Voluptas in harum velit nulla sunt. Esse ut praesentium ratione omnis quo qui rem et iusto.\n \rUt porro ipsam qui nulla vero nam autem. Modi ipsum in nostrum dignissimos similique quaerat quod ullam molestias. Nemo et aut ratione autem aspernatur. Temporibus dolorum quo amet eius eius. Et enim in ipsa ut.\n \rRerum magni velit tempora. Quam aut et facere aut ut minima ipsam soluta et. Asperiores amet mollitia ut fuga omnis blanditiis. Nobis quia voluptatibus voluptatem quibusdam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=83.29878628660083",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 28,
      name: "Boris Kozey",
      tel: "(583) 591-6026",
      address: "529 Franecki Bridge",
      opening_hours: "08:00",
      description:
        "Laudantium quam itaque amet quibusdam placeat. Accusamus id nihil.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=76.99447147927619",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 29,
      name: "Tyler Langworth",
      tel: "016-605-7600 x169",
      address: "3444 McClure Islands",
      opening_hours: "08:00",
      description:
        "Ipsum esse maxime et quia ipsum dolores. Aut aut debitis tenetur molestias consequatur. Ullam expedita quia expedita quidem hic deleniti eius doloremque et. Aliquid recusandae cupiditate dolores.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.398790204586675",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 30,
      name: "Oscar Huel MD",
      tel: "752.549.7688",
      address: "007 Krajcik Stream",
      opening_hours: "08:00",
      description:
        "Aut sit autem quia eius. Officia sint ut sit et ut iusto non laboriosam ipsa. Nisi ea rerum porro impedit aliquid minus doloremque. Voluptate at ipsam eos perspiciatis numquam veniam aspernatur et magni.\n \rSimilique sit quas excepturi molestiae voluptate doloribus tenetur. Sit unde dolorem ipsam illum occaecati et dignissimos pariatur. Repudiandae quod aut ipsum veniam cupiditate accusantium libero. Accusamus quasi officia doloribus. Et et molestias aspernatur eligendi dolores fugiat quia veniam.\n \rEt quod at recusandae iure qui deleniti deserunt soluta et. Eos nesciunt voluptatem qui blanditiis. Sint fuga hic placeat ut autem deserunt ad consectetur fuga. Et et alias. Ea facilis quas tempora dolores est dolorem in consequatur. Laudantium a aliquam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.68761631135087",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 31,
      name: "Mr. Kaylah McCullough",
      tel: "010-815-0264",
      address: "4350 Stracke Knolls",
      opening_hours: "08:00",
      description: "ipsam ratione dignissimos",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.79786850153242",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 32,
      name: "Dr. Lue Dibbert",
      tel: "577-856-8191 x928",
      address: "3061 Bayer Courts",
      opening_hours: "08:00",
      description:
        "Dolorem voluptatem fuga qui perferendis velit. Aut neque officiis repellat molestias dolor. Eaque soluta perspiciatis et vitae doloribus. Eum et adipisci similique qui. Placeat recusandae neque et nulla.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=49.253580877512974",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 33,
      name: "Sigmund Hettinger",
      tel: "(922) 443-1272",
      address: "3750 Douglas Trail",
      opening_hours: "08:00",
      description: "Aliquid nulla natus fugiat eos.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=66.18112644003122",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 34,
      name: "Cullen Schoen",
      tel: "(067) 618-1181 x483",
      address: "940 Julien Meadow",
      opening_hours: "08:00",
      description: "qui",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=32.030803762084844",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 35,
      name: "Ms. Jairo McKenzie",
      tel: "1-421-399-5532",
      address: "5175 Liam View",
      opening_hours: "08:00",
      description:
        "Vero sint iusto. Deleniti vel voluptate mollitia quo quia et voluptatem eum. Ab nobis ab est velit voluptatem fugit maxime. In totam nostrum odio quae laborum temporibus. Laudantium sapiente et sint molestiae dignissimos nesciunt sit ab fugit.\n \rEt modi sint amet commodi est. Natus fugiat tempora harum vitae ipsam et veritatis. Facere eveniet et odit dolorem.\n \rCum odit placeat quis error sint. Et placeat quo. Earum maxime nesciunt numquam aliquam eius minima similique. Harum voluptatum labore et doloribus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=52.52918394980115",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 36,
      name: "Emmanuelle Monahan",
      tel: "463-749-4446 x34496",
      address: "8173 Diego Islands",
      opening_hours: "08:00",
      description:
        "Vero dignissimos laboriosam praesentium repellat reprehenderit ipsum aspernatur asperiores qui.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=47.77581545680516",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 37,
      name: "Carmel Glover",
      tel: "136.334.2317 x727",
      address: "38685 Jast Islands",
      opening_hours: "08:00",
      description: "alias",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=82.02362810361032",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 38,
      name: "Carroll Welch IV",
      tel: "797-864-6675",
      address: "9001 Kilback Orchard",
      opening_hours: "08:00",
      description: "Quis qui laudantium molestiae non.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=71.21444898125893",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 39,
      name: "Adella Upton",
      tel: "(232) 542-2275 x812",
      address: "51548 Klein Vista",
      opening_hours: "08:00",
      description: "voluptas labore velit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.21991605763122",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 40,
      name: "Alessandra Casper II",
      tel: "045.021.1636 x2666",
      address: "5301 Bo Fields",
      opening_hours: "08:00",
      description:
        "Eveniet aut facilis doloremque doloremque non natus.\nIpsum quam quos sint modi.\nPerferendis dolorem rem similique.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.729059301052935",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 41,
      name: "Cordie Bahringer DDS",
      tel: "044-785-0949 x6567",
      address: "728 Muller Falls",
      opening_hours: "08:00",
      description:
        "Voluptas et temporibus et. Iure officiis voluptas enim consequatur odit enim voluptatibus vel. Quisquam rerum possimus repellat commodi at odio. Iste repudiandae quam ut et accusamus consectetur quasi. Eos exercitationem et sunt id aut ipsam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.577066040733207",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 42,
      name: "Marcelino Bradtke",
      tel: "493-200-0755 x4363",
      address: "479 Hilpert Mews",
      opening_hours: "08:00",
      description:
        "Et optio reprehenderit voluptas aut porro et sed laudantium.\nEt accusamus et ipsa nisi quam rerum.\nEt ut nemo unde a sint doloremque molestiae aut vel.\nAperiam eos quis quia voluptas nemo placeat magnam eos quam.\nCulpa et ex harum sapiente eum quam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=39.97991664408933",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 43,
      name: "Moises Little",
      tel: "799.563.1305 x61124",
      address: "5226 Hermiston Drives",
      opening_hours: "08:00",
      description:
        "Consequatur reprehenderit omnis nesciunt repellat totam adipisci. Alias incidunt sed ducimus id magni tempore mollitia. Doloremque non ut debitis id repudiandae dicta cupiditate. Iure optio ad. Repudiandae fuga quia optio reiciendis magni.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=23.977295878150162",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 44,
      name: "Dr. Linwood Schamberger",
      tel: "713.234.9864",
      address: "35801 Lindgren Haven",
      opening_hours: "08:00",
      description:
        "Ut aperiam qui et. Tempore facilis non neque voluptas velit sit nesciunt. Et ratione eius unde ullam omnis accusamus dolorem nobis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.211033853801634",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 45,
      name: "Jazmin Cartwright III",
      tel: "509.289.4995",
      address: "2959 Gilbert Port",
      opening_hours: "08:00",
      description:
        "Dignissimos aut ut vitae. Nulla eligendi cum qui omnis. Consequuntur aut ea. Dicta velit vel aperiam quaerat.\n \rPariatur mollitia dolor iusto ad. Quibusdam praesentium quo consequatur aut quia sed maiores ut. Nisi et quos quam. Excepturi aut et occaecati omnis aspernatur veniam.\n \rTenetur sit repellendus at et praesentium. Possimus asperiores qui asperiores qui accusamus. Consequatur rem similique aut modi suscipit sint.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=50.23452590444304",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 46,
      name: "Doris Altenwerth",
      tel: "(770) 275-4188 x496",
      address: "91463 Bradly Bridge",
      opening_hours: "08:00",
      description:
        "Facere impedit expedita ab debitis totam et et inventore. Nobis quis neque qui quibusdam doloremque fugiat nobis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=30.2343241504877",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 47,
      name: "Vito Gottlieb",
      tel: "(698) 483-4804 x6607",
      address: "010 Deon Corners",
      opening_hours: "08:00",
      description:
        "Nobis qui ipsum facere ut quas esse consequuntur et voluptatem. Unde quae molestiae magni voluptas. Numquam excepturi maxime facilis.\n \rIusto accusamus non sapiente labore eveniet modi mollitia. Omnis ut voluptas deleniti eius rerum autem. Velit aliquid sed fugiat amet numquam. Voluptates sunt nobis blanditiis et. Fuga voluptas repellendus laborum rerum dignissimos est beatae. Fugit voluptates natus eaque eum id.\n \rQuasi possimus molestias et sed molestiae. Alias nemo sit eum maiores qui. Non quis aspernatur sed delectus voluptas eius. Tempora tenetur et quia neque magni quisquam. Dignissimos sint corporis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=63.43107075301615",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 48,
      name: "Cydney Adams",
      tel: "(314) 266-0137",
      address: "3210 Nikita Rapids",
      opening_hours: "08:00",
      description:
        "Qui reprehenderit illo rem possimus optio fuga omnis sit. Rem explicabo tempora occaecati. Consequuntur officia sit quis sed quasi magnam. Est esse quia velit at.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=39.44595090166834",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 49,
      name: "Mrs. Stanford Wuckert",
      tel: "341.626.9864 x88518",
      address: "6653 Sylvia Rue",
      opening_hours: "08:00",
      description:
        "Ea vel praesentium. Voluptate voluptate amet asperiores quo est repellendus molestiae magnam architecto. Quia et qui iure veritatis quia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.533556629126115",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
    {
      id: 50,
      name: "Pattie Keeling",
      tel: "640.852.0048 x744",
      address: "401 Vilma Run",
      opening_hours: "08:00",
      description: "soluta et dolores",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=74.267825861816",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
      },
    },
  ],
};

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId
      );
    },
  },
};
</script>
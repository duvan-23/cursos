const { normalize, denormalize, schema } = require('normalizr');

/* -------------------------------------- */
// OBJETO DE PRUEBA
/* -------------------------------------- */
const originalData = {
    id: "999",
    posts: [
        {
          id: 1,
          author: {
            id: 'duvan@hotnmail.com',
            nombre: 'Duvan',
            apellido: 'Caicedo',
            edad: 23,
            alias: 'duvan',
            avatar: 'https://cdn-icons-png.flaticon.com/512/840/840081.png'
          },
          title: 'My awesome blog post1',
          comments: [
            {
              id: 'jn5gpduvan@hotnmail.com',
              commenter: {
                id: 'duvan@hotnmail.com',
                nombre: 'Duvan',
                apellido: 'Caicedo',
                edad: 23,
                alias: 'duvan',
                avatar: 'https://cdn-icons-png.flaticon.com/512/840/840081.png'
              }
            }
          ]
        },
        {
          id: 2,
          author: {
            id: 'david@hotnmail.com',
            nombre: 'David',
            apellido: 'Salcedo',
            edad: 20,
            alias: 'david',
            avatar: 'https://cdn-icons-png.flaticon.com/512/840/840081.png'
          },
          title: 'My awesome blog post1',
          comments: [
            {
              id: '23wttdavid@hotnmail.com',
              commenter: {
                id: 'david@hotnmail.com',
                nombre: 'David',
                apellido: 'Salcedo',
                edad: 20,
                alias: 'david',
                avatar: 'https://cdn-icons-png.flaticon.com/512/840/840081.png'
              }
            }
          ]
        },
        {
          id: 3,
          author: {
            id: 'duvan@hotnmail.com',
            nombre: 'Duvan',
            apellido: 'Caicedo',
            edad: 23,
            alias: 'duvan',
            avatar: 'https://cdn-icons-png.flaticon.com/512/840/840081.png'
          },
          title: 'My awesome blog post1',
          comments: [
            {
              id: 'iivrqduvan@hotnmail.com',
              commenter: {
                id: 'duvan@hotnmail.com',
                nombre: 'Duvan',
                apellido: 'Caicedo',
                edad: 23,
                alias: 'duvan',
                avatar: 'https://cdn-icons-png.flaticon.com/512/840/840081.png'
              }
            }
          ]
        }
      ]
}

/* -------------------------------------- */
// Definicion de schemas
/* -------------------------------------- */

const user = new schema.Entity('users');

const comment = new schema.Entity('comments', {
    commenter: user
})

const post = new schema.Entity('posts', {
    author: user,
    comments: [comment]
})

const blog = new schema.Entity('blog', {
    posts: [post]
})

/* -------------------------------------- */
// Normalizacion
/* -------------------------------------- */

const util = require('util');

function print(obj) {
    console.log(util.inspect(obj, false, 12, true));
}

console.log('Objeto original')
print(originalData)
console.log(JSON.stringify(originalData).length)

console.log('Normalizacion')
const normalizedData = normalize(originalData, blog);
print(normalizedData)
console.log(JSON.stringify(normalizedData).length)

// Porcentaje de reduccion
console.log('Porcentaje de reduccion')
console.log(100 - ((JSON.stringify(normalizedData).length * 100) / JSON.stringify(originalData).length))


/* -------------------------------------- */
// Denormalizacion
/* -------------------------------------- */

const denormalizedData = denormalize(normalizedData.result, blog, normalizedData.entities);
console.log('Denormalizacion')
print(denormalizedData)
console.log(JSON.stringify(denormalizedData).length)
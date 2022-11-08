const { writeFile } = require('fs')
const yml = require('yandex-market-language')
const axios = require('axios')
const { routesBack } = require('./config/routesBack')
const { companyName } = require('./config/companyName')
const { routesFront } = require('./config/routesFront')
const { currencyRates } = require('./config/currencyRates')

const feedYMLConfig = {
  feed: {
    name: companyName,
    url: routesFront.root,
    email: 'info@moscow.mba',
    picture: `${routesFront.root}${routesFront.assetsImgsIconsManifestIcon512}`,
    description:
      '✔ MBA бизнес школа дистанционного образования.\n Международные эксперты-практики!\n Рассрочка 0%\n Аккредитация ECICEL',
    currencies: [
      {
        id: 'RUB',
        rate: currencyRates.rub
      },
      {
        id: 'KZT',
        rate: currencyRates.kzt
      },
      {
        id: 'UZM',
        rate: currencyRates.uzm
      }
    ],
    categories: [
      {
        id: 'miniOnline',
        url: `${routesFront.root}${routesFront.programsMiniOnline}`,
        name: 'MBA Mini Online'
      },
      {
        id: 'mbaOnline',
        url: `${routesFront.root}${routesFront.programsMbaOnline}`,
        name: 'MBA Online'
      },
      {
        id: 'professionOnline',
        url: `${routesFront.root}${routesFront.programsProfessionOnline}`,
        name: 'Профессия'
      },
      {
        id: 'courseOnline',
        url: `${routesFront.root}${routesFront.programsCoursesOnline}`,
        name: 'Курс'
      }
    ]
  }
}

const VALID_INPUT = {
  name: 'BestSeller',
  company: 'Tne Best inc.',
  url: 'http://best.seller.ru',
  currencies: [
    { id: 'RUR', rate: 1 },
    { id: 'USD', rate: 60 }
  ],
  categories: [
    { id: '1', name: 'Бытовая техника' },
    { id: '10', parentId: '1', name: 'Мелкая техника для кухни' },
    { id: '101', parentId: '10', name: 'Сэндвичницы и приборы для выпечки' },
    { id: '102', parentId: '10', name: 'Мороженицы' }
  ],
  'delivery-options': [{ cost: 300, days: [1, 20], 'order-before': 12 }],
  offers: [
    {
      id: '12346',
      available: true,
      bid: 80,
      cbid: 90,
      fee: 325,
      url: 'http://best.seller.ru/product_page.asp?pid=12348',
      price: 1490,
      oldprice: 1620,
      currencyId: 'RUR',
      categoryId: '101',
      picture: ['http://best.seller.ru/img/large_12348.jpg'],
      store: false,
      pickup: true,
      outlets: [
        { id: '1', instock: 50 },
        { id: '2', instock: 20, booking: true }
      ],
      delivery: true,
      'delivery-options': [{ cost: 300, days: 0, 'order-before': 12 }],
      name: 'Вафельница First FA-5300',
      vendor: 'First',
      vendorCode: 'A1234567B',
      currencies: `
        <p>Отличный подарок для любителей венских вафель.</p>
      `,
      sales_notes: 'Необходима предоплата.',
      manufacturer_warranty: true,
      country_of_origin: 'Россия',
      age: { unit: 'month', value: 12 },
      barcode: ['0156789012'],
      param: [
        { name: 'Размер экрана', unit: 'дюйм', value: 27 },
        { name: 'Материал', value: 'алюминий' }
      ],
      dimensions: [20, 30, 40],
      cpa: '1',
      rec: ['123', '456']
    }
  ]
}

const getData = async () => {
  const res = await axios.get(`${routesBack.root}${routesBack.programs}`)
  const data = res.data

  return data
}

// todo: figure out better types
const buildFeedData = data => {
  if (!feedYMLConfig.feed.name)
    throw new Error('feedYMLConfig.feed.name is required')

  if (!feedYMLConfig.feed.url)
    throw new Error('feedYMLConfig.feed.url is required')

  if (!feedYMLConfig.feed.email)
    throw new Error('feedYMLConfig.feed.email is required')

  if (!feedYMLConfig.feed.picture)
    throw new Error('feedYMLConfig.feed.picture is required')

  if (!feedYMLConfig.feed.currencies)
    throw new Error('feedYMLConfig.feed.currencies is required')

  const output = {
    name: feedYMLConfig.feed.name,
    url: feedYMLConfig.feed.url,
    email: feedYMLConfig.feed.email,
    picture: feedYMLConfig.feed.picture,
    description: feedYMLConfig.feed.description,
    currencies: feedYMLConfig.feed.currencies,
    categories: feedYMLConfig.feed.categories
  }

  return output
}

const createFeedYML = async () => {
  const data = await getData()

  const feedData = buildFeedData(data)

  const YML = yml(VALID_INPUT).end({ pretty: true })

  writeFile('./public/feed.yml', YML, err => {
    if (err) throw err
    console.log('YML has been saved!')
  })
}

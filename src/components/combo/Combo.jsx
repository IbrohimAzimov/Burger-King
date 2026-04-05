export default function Combo() {
  const data = [
    {
        id: 1,
        image: 'https://burgerking.uz/img/menu/combo/double-whopper-small.png',
        title: 'Двойной Воппер Комбо Small',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 2,
        image: 'https://burgerking.uz/img/menu/combo/double-whopper.png',
        title: 'Двойной Воппер Комбо Standart',
        price: '81 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 3,
        image: 'https://burgerking.uz/img/menu/combo/double-crispy-chicken-small.png',
        title: 'Двойной Криспи Чикен Комбо Small',
        price: '59 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 4,
        image: 'https://burgerking.uz/img/menu/combo/double-crispy-chicken.png',
        title: 'Двойной Криспи Чикен Комбо...',
        price: '67 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 5,
        image: 'https://burgerking.uz/img/menu/combo/whopper-small.png',
        title: 'Воппер Комбо Small',
        price: '58 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 6,
        image: 'https://burgerking.uz/img/menu/combo/whopper.png',
        title: 'Воппер Комбо Standart',
        price: '67 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 7,
        image: 'https://burgerking.uz/img/menu/combo/steakhouse-small.png',
        title: 'Стейкхаус Комбо Small',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 8,
        image: 'https://burgerking.uz/img/menu/combo/steakhouse.png',
        title: 'Стейкхаус Комбо Standart',
        price: '59 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 9,
        image: 'https://burgerking.uz/img/menu/combo/long-chicken-small.png',
        title: 'Воппер Комбо Small',
        price: '50 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 10,
        image: 'https://burgerking.uz/img/menu/combo/long-chicken.png',
        title: 'Воппер Комбо Small',
        price: '59 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 11,
        image: 'https://burgerking.uz/img/menu/combo/crispy-chicken-small.png',
        title: 'Воппер Комбо Small',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 12,
        image: 'https://burgerking.uz/img/menu/combo/crispy-chicken.png',
        title: 'Воппер Комбо Small',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 13,
        image: 'https://burgerking.uz/img/menu/combo/whopper-jr-small.png',
        title: 'Воппер Комбо Small',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 14,
        image: 'https://burgerking.uz/img/menu/combo/whopper-jr.png',
        title: 'Воппер Комбо Small',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 15,
        image: 'https://burgerking.uz/img/menu/combo/beef-roll-small.png',
        title: 'Воппер Комбо Small',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 16,
        image: 'https://burgerking.uz/img/menu/combo/beef-roll.png',
        title: 'Воппер Комбо Small',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 17,
        image: 'https://burgerking.uz/img/menu/combo/cheeseburger-small.png',
        title: 'Воппер Комбо Small',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 18,
        image: 'https://burgerking.uz/img/menu/combo/cheeseburger.png',
        title: 'Воппер Комбо Small',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 19,
        image: 'https://burgerking.uz/img/menu/combo/combo-for-2.png',
        title: 'Воппер Комбо Small',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 20,
        image: 'https://burgerking.uz/img/menu/combo/combo-for-3.png',
        title: 'Воппер Комбо Small',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 21,
        image: 'https://burgerking.uz/img/menu/combo/combo-for-4.png',
        title: 'Комбо для 4',
        price: '265 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 22,
        image: 'https://burgerking.uz/img/menu/combo/king-box-family.png',
        title: 'Кинг Бокс семейный',
        price: '251 000 UZS',
        button: 'Скоро запуск',
    },
  ]
  return (
    <>
        <h1 className="text-amber-950 text-5xl ml-62 mt-10 font-extrabold">Комбо</h1>
        <div className="content flex ml-62 gap-5 flex-wrap w-[90%] mt-10">
            {data?.map((item) => {
                return (
                    <div className="card bg-[#ffffffcd] rounded-4xl w-70 h-100">
                        <div className="w-50 h-50 flex items-center justify-center m-auto"> <img src={item.image} alt="img" /> </div>
                        <div className="pl-5">
                            <h3 className="text-2xl text-amber-950 font-bold"> {item.title} </h3>
                            <p className="text-amber-950 font-bold mt-4"> {item.price} </p><br />

                            <button className="bg-gray-200 rounded-full px-5 py-2"> {item.button} </button>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
  )
}

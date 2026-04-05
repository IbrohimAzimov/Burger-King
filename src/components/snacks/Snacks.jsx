export default function Snacks() {
  const data = [
    {
        id: 1,
        image: 'https://burgerking.uz/img/menu/sneklar/fries-small.png',
        title: 'Картофель фри (маленький)',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 2,
        image: 'https://burgerking.uz/img/menu/sneklar/fries-medium.png',
        title: 'Картофель фри (средний)',
        price: '81 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 3,
        image: 'https://burgerking.uz/img/menu/sneklar/potato-wedges.png',
        title: 'Картофель по-деревенски',
        price: '59 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 4,
        image: 'https://burgerking.uz/img/menu/sneklar/nuggets-9.png',
        title: 'Наггетсы (9 шт.)',
        price: '67 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 5,
        image: 'https://burgerking.uz/img/menu/sneklar/nuggets-15.png',
        title: 'Воппер Комбо Small',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 6,
        image: 'https://burgerking.uz/img/menu/sneklar/onion-rings-4.png',
        title: 'Воппер Комбо Standart',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 7,
        image: 'https://burgerking.uz/img/menu/sneklar/onion-rings-8.png',
        title: 'Стейкхаус Комбо Small',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },

  ]
  return (
    <>
        <h1 className="text-amber-950 text-5xl ml-62 mt-10 font-extrabold">Снэки</h1>
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

export default function Burger() {
  const data = [
    {
        id: 1,
        image: 'https://burgerking.uz/img/menu/burger/double-whopper.png',
        title: 'Двойной Воппер',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 2,
        image: 'https://burgerking.uz/img/menu/burger/double-crispy-chicken.png',
        title: 'Двойной Воппер Комбо Standart',
        price: '81 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 3,
        image: 'https://burgerking.uz/img/menu/burger/whopper.png',
        title: 'Воппер',
        price: '59 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 4,
        image: 'https://burgerking.uz/img/menu/burger/steakhouse.png',
        title: 'Стейкхаус',
        price: '67 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 5,
        image: 'https://burgerking.uz/img/menu/burger/long-chicken.png',
        title: 'Лонг Чикен',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 6,
        image: 'https://burgerking.uz/img/menu/burger/crispy-chicken.png',
        title: 'Криспи Чикен',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 7,
        image: 'https://burgerking.uz/img/menu/burger/whopper-jr.png',
        title: 'Воппер Джуниор',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 8,
        image: 'https://burgerking.uz/img/menu/burger/beef-roll.png',
        title: 'Воппер Ролл',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 9,
        image: 'https://burgerking.uz/img/menu/burger/cheeseburger.png',
        title: 'Чизбургер',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
  ]
  return (
    <>
        <h1 className="text-amber-950 text-5xl ml-62 mt-10 font-extrabold">Бургеры</h1>
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

export default function Hot_Drinks() {
  const data = [
    {
        id: 1,
        image: 'https://burgerking.uz/img/menu/issiq-ichimliklar/americano-03.png',
        title: 'Американо 0,3 л',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 2,
        image: 'https://burgerking.uz/img/menu/issiq-ichimliklar/americano-04.png',
        title: 'Американо 0,4 л',
        price: '81 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 3,
        image: 'https://burgerking.uz/img/menu/issiq-ichimliklar/latte-03.png',
        title: 'Латте 0,3 л',
        price: '59 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 4,
        image: 'https://burgerking.uz/img/menu/issiq-ichimliklar/latte-04.png',
        title: 'Латте 0,4 л',
        price: '67 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 5,
        image: 'https://burgerking.uz/img/menu/issiq-ichimliklar/cappuccino-03.png',
        title: 'Капучино 0,3 л',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 6,
        image: 'https://burgerking.uz/img/menu/issiq-ichimliklar/cappuccino-04.png',
        title: 'Капучино 0,4 л',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 7,
        image: 'https://burgerking.uz/img/menu/issiq-ichimliklar/tea-03.png',
        title: 'Чай 0,3 л',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 8,
        image: 'https://burgerking.uz/img/menu/issiq-ichimliklar/tea-04.png',
        title: 'Чай 0,4 л',
        price: '72 000 UZS',
        button: 'Скоро запуск',
    },
  ]
  return (
    <>
        <h1 className="text-amber-950 text-5xl ml-62 mt-10 font-extrabold">Горячие напитки</h1>
        <div className="content flex justify-end gap-5 flex-wrap w-[90%] mt-10">
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

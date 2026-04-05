export default function Drinks() {
  const data = [
    {
        id: 1,
        image: 'https://burgerking.uz/img/menu/ichimliklar/pepsi-04.png',
        title: 'Pepsi 0,4 л',
        price: '9 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 2,
        image: 'https://burgerking.uz/img/menu/ichimliklar/pepsi-diet-04.png',
        title: 'Pepsi Diet 0,4 л',
        price: '9 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 3,
        image: 'https://burgerking.uz/img/menu/ichimliklar/mirinda-04.png',
        title: 'Mirinda 0,4 л',
        price: '9 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 4,
        image: 'https://burgerking.uz/img/menu/ichimliklar/7up-04.png',
        title: '7up 0,4 л',
        price: '9 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 5,
        image: 'https://burgerking.uz/img/menu/ichimliklar/pepsi-08.png',
        title: 'Pepsi 0,8 л',
        price: '14 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 6,
        image: 'https://burgerking.uz/img/menu/ichimliklar/pepsi-05.png',
        title: 'Pepsi 0,5 л',
        price: '11 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 7,
        image: 'https://burgerking.uz/img/menu/ichimliklar/pepsi-diet-05.png',
        title: 'Pepsi Diet 0,5 л',
        price: '11 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 8,
        image: 'https://burgerking.uz/img/menu/ichimliklar/mirinda-05.png',
        title: 'Mirinda 0,5 л',
        price: '11 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 9,
        image: 'https://burgerking.uz/img/menu/ichimliklar/7up-05.png',
        title: '7up 0,5 л',
        price: '11 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 10,
        image: 'https://burgerking.uz/img/menu/ichimliklar/pepsi-bottle-05.png',
        title: 'Pepsi (бутылка) 0,5 л',
        price: '13 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 11,
        image: 'https://burgerking.uz/img/menu/ichimliklar/water-05.png',
        title: 'Вода 0,5 л',
        price: '7 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 12,
        image: 'https://burgerking.uz/img/menu/ichimliklar/juice-multifruit.png',
        title: 'Сочная долина детский сок 0,2 л...',
        price: '7 000 UZS',
        button: 'Скоро запуск',
    },
    {
        id: 13,
        image: 'https://burgerking.uz/img/menu/ichimliklar/juice-apple.png',
        title: 'Сочная долина детский сок 0,2 л...',
        price: '7 000 UZS',
        button: 'Скоро запуск',
    },
  ]
  return (
    <>
        <h1 className="text-amber-950 text-5xl ml-62 mt-10 font-extrabold">Напитки</h1>
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

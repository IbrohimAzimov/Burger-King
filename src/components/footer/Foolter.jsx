import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Foolter() {
  return (
    <>
        <footer className="w-full p-20 bg-[#ffffffb3] mt-20">
            <div className="footer flex justify-around">
                <div className="block">
                    <div className="flex items-center gap-3 mb-2">
                        <img src="https://burgerking.uz/img/logo.svg" alt="burger" />
                        <h1 className="text-2xl text-amber-950 font-bold">Burger King</h1>
                    </div>
                    <p className="text-gray-600">ИП ООО «FAST FOOD SYSTEMS» <br />
                    Юридический адрес: г. Ташкент, <br /> Яккасарайский район, улица <br /> Бобура, 74 дом. <br />
                    Все права защищены. <br />
                    TM & Copyright 2026 Burger King <br /> Corporation. All Rights Reserved. <br /><br />

                    Работает на эффективном ядре <br />
                    Foodpicásso ver. 3.1</p>
                </div>
                <div className="block">
                    <a href="#" className="text-amber-950 font-bold">Вакансии</a><br /><br />
                    <a href="#" className="text-amber-950 font-bold">Сертификат</a><br />
                    <a href="#" className="text-amber-950 font-bold">Халяль</a>
                </div>
                <div className="block">
                    <a href="#" className="text-amber-950 font-bold">Публичная оферта</a><br /><br />
                    <a href="#" className="text-amber-950 font-bold">Политика</a><br />
                    <a href="#" className="text-amber-950 font-bold">конфиденциальности</a>
                </div>
                <div className="flex gap-4">
                    <FaFacebook className="text-3xl text-cyan-500" />
                    <FaLinkedinIn className="text-3xl text text-cyan-600" />
                    <FaInstagram className="text-3xl text-pink-500" />
                </div>
            </div>
        </footer>
    </>
  )
}

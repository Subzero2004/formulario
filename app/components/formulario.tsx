
import React from "react"

type Props = {}

const Formulario = (props: Props) => {
    return (
    <section className="max-w-[1440px] w-full h-full bg-[rgb(21,32,43)] flex flex-col justify-center items-center gap-[40px] py-[80px]">
        <div className="w-[723px] h-[95px] flex flex-col gap-[18px]">
            <div className="flex gap-2">
                <p className="text-[rgb(188,57,74)] font-normal text-lg">1.</p>
                <p className="text-white font-normal text-lg">Nombre Completo *</p>
            </div>
            <div className="flex justify-between">
                <input id="name" type="name" name="name" autoComplete="off" required placeholder="Nombre"
                className="w-[350px] h-[55px] pl-[14px] bg-[rgb(25,39,52)] text-[rgb(93,110,123)] border-[1px] border-[rgb(60,71,81)]" />
                <input id="apellido" type="apellido" name="apellido" autoComplete="off" required placeholder="Apellido"
                className="w-[350px] h-[55px] pl-[14px] bg-[rgb(25,39,52)] text-[rgb(93,110,123)] border-[1px] border-[rgb(60,71,81)]" />
            </div>
        </div>
        <div className="w-[723px] h-[95px] flex flex-col gap-[18px]">
            <div className="flex gap-2">
                <p className="text-[rgb(188,57,74)] font-normal text-lg">2.</p>
                <p className="text-white font-normal text-lg">Correo Electronico *</p>
            </div>
            <input id="correo" type="correo" name="correo" autoComplete="off" required placeholder=""
            className="w-full h-[55px] pl-[14px] bg-[rgb(25,39,52)] text-[rgb(93,110,123)] border-[1px] border-[rgb(60,71,81)]" />
        </div>
        <div className="w-[723px] h-[95px] flex flex-col gap-[18px]">
            <div className="flex gap-2">
                <p className="text-[rgb(188,57,74)] font-normal text-lg">3.</p>
                <p className="text-white font-normal text-lg">Numero de Contacto *</p>
            </div>
            <input id="correo" type="correo" name="correo" autoComplete="off" required placeholder=""
            className="w-full h-[55px] pl-[14px] bg-[rgb(25,39,52)] text-[rgb(93,110,123)] border-[1px] border-[rgb(60,71,81)]" />
        </div>
        <div className="w-[723px] h-[95px] flex flex-col gap-[18px]">
            <div className="flex gap-2">
                <p className="text-[rgb(188,57,74)] font-normal text-lg">4.</p>
                <p className="text-white font-normal text-lg">Nombre de la Empresa o Proyecto *</p>
            </div>
            <input id="correo" type="correo" name="correo" autoComplete="off" required placeholder=""
            className="w-full h-[55px] pl-[14px] bg-[rgb(25,39,52)] text-[rgb(93,110,123)] border-[1px] border-[rgb(60,71,81)]" />
        </div>
        <div className="w-[723px] h-[95px] flex flex-col gap-[18px]">
            <div className="flex gap-2">
                <p className="text-[rgb(188,57,74)] font-normal text-lg">5.</p>
                <p className="text-white font-normal text-lg">Descripción Breve de la Empresa o Proyecto *</p>
            </div>
            <input id="correo" type="correo" name="correo" autoComplete="off" required placeholder=""
            className="w-full h-[55px] pl-[14px] bg-[rgb(25,39,52)] text-[rgb(93,110,123)] border-[1px] border-[rgb(60,71,81)]" />
        </div>
        <div className="w-[723px] h-[160px] flex flex-col gap-[18px]">
            <div className="flex gap-2">
                <p className="text-[rgb(188,57,74)] font-normal text-lg">6.</p>
                <p className="text-white font-normal text-lg">¿Cual es la vision y mision de la empresa/proyecto? *</p>
            </div>
            <textarea id="correo" name="correo" autoComplete="off" required placeholder=""
            className="w-full h-[120px] pl-[14px] pt-[20px] bg-[rgb(25,39,52)] text-[rgb(93,110,123)] border-[1px] border-[rgb(60,71,81)]" />
        </div>
        <div className="w-[723px] h-[160px] flex flex-col gap-[18px]">
            <div className="flex gap-2">
                <p className="text-[rgb(188,57,74)] font-normal text-lg">7.</p>
                <p className="text-white font-normal text-lg">¿Qué valores o conceptos desea el logo/diseño representante? *</p>
            </div>
            <textarea id="correo" name="correo" autoComplete="off" required placeholder=""
            className="w-full h-[120px] pl-[14px] pt-[20px] bg-[rgb(25,39,52)] text-[rgb(93,110,123)] border-[1px] border-[rgb(60,71,81)]" />
        </div>
        <div className="w-[723px] h-[95px] flex flex-col gap-[18px]">
            <div className="flex gap-2">
                <p className="text-[rgb(188,57,74)] font-normal text-lg">9.</p>
                <p className="text-white font-normal text-lg">Elementos específicos que le gustaría incluir en el diseño *</p>
            </div>
            <input id="correo" type="correo" name="correo" autoComplete="off" required placeholder=""
            className="w-full h-[55px] pl-[14px] bg-[rgb(25,39,52)] text-[rgb(93,110,123)] border-[1px] border-[rgb(60,71,81)]" />
        </div>
        <div className="w-[723px] h-[95px] flex flex-col gap-[18px]">
            <div className="flex gap-2">
                <p className="text-[rgb(188,57,74)] font-normal text-lg">8.</p>
                <p className="text-white font-normal text-lg">Colores preferidos (si los tiene) *</p>
            </div>
            <input id="correo" type="correo" name="correo" autoComplete="off" required placeholder=""
            className="w-full h-[55px] pl-[14px] bg-[rgb(25,39,52)] text-[rgb(93,110,123)] border-[1px] border-[rgb(60,71,81)]" />
        </div>
        <div className="w-[723px] h-[95px] flex flex-col gap-[18px]">
            <div className="flex gap-2">
                <p className="text-[rgb(188,57,74)] font-normal text-lg">9.</p>
                <p className="text-white font-normal text-lg">Elementos específicos que le gustaría incluir en el diseño *</p>
            </div>
            <input id="correo" type="correo" name="correo" autoComplete="off" required placeholder=""
            className="w-full h-[55px] pl-[14px] bg-[rgb(25,39,52)] text-[rgb(93,110,123)] border-[1px] border-[rgb(60,71,81)]" />
        </div>
    </section>
    )
}

export default Formulario
import Image from "next/image"
import styles from '@/styles/deco.module.scss'

export default function Deco() {



    return (
        <div className="fixed w-screen h-screen overflow-hidden -z-10">
            <Image
                src={"/images/img-bot.png"} 
                width={698}
                height={100}
                alt="img-bot"
                className={`absolute bottom-0 right-0 bg-none ${styles.imgBot}`}
            />
            <Image
                src={"/images/img-top.png"} 
                width={698}
                height={100}
                alt="img-top"
                className={`absolute top-0 left-0 bg-none ${styles.imgTop}`}
            />
            <p className={`absolute w-screen h-screen flex justify-center items-start ${styles.horizontal}`}>Site en construction</p>
        </div>
    )
}

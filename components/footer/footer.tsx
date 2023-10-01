'use client'
import { MouseEvent } from 'react';
import { useRouter } from "next/navigation"
import Link from "next/link"
import styles from '@/styles/footer.module.scss'

export default function Footer() {
    const router = useRouter()

    const links = [{
        label: 'Pixel Brain -',
        url: '/'
    }, {
        label: 'Mention Légales -',
        url: '/Mention'
    }, {
        label: "CGV",
        url: '/CGV'
    }
    ]
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.target as HTMLButtonElement;
        const buttonText = button.textContent;
        
        if (buttonText?.includes('Mention Légales')) {
            router.push('/mention');
        } else if (buttonText?.includes('CGV')) {
            router.push('/CGV');
        } else if (buttonText?.includes('Pixel Brain')) {
            router.push('/');
        }    }
    
    return (
        <footer className={`absolute bottom-0 w-screen flex flex-col text-center ${styles.footer}`}>
            <p className="mb-2">Site en construction</p>
            <ul className="flex gap-2 justify-center">
                {links.map((link) => (
                    <button key={link.label} 
                        onClick={(e) => handleClick(e)}      
                        className={`cursor-pointer`}
                    >
                        {link.label}
                    </button>
                ))}
            </ul>
            <Link href={"https://github.com/albocoq"}>Made by <span style={{color: "red"}}>♥</span> albo</Link>
        </footer>
    )
}

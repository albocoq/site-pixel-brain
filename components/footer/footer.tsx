'use client'
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
    const handleClick = (e) => {
        e.target.innerHTML.includes('Mention Légales') && router.push('/mention')
        e.target.innerHTML.includes('CGV') && router.push('/CGV')
        e.target.innerHTML.includes('Pixel Brain') && router.push('/')
    }
    
    return (
        <footer className={`absolute bottom-0 w-screen flex flex-col text-center ${styles.footer}`}>
            <p className="mb-2">Site en construction</p>
            <ul className="flex gap-2 justify-center">
                {links.map((link) => (
                    <li key={link.label} 
                        onClick={(e) => handleClick(e)}      
                        className={`cursor-pointer`}
                    >
                        {link.label}
                    </li>
                ))}
            </ul>
            <Link href={"https://github.com/albocoq"}>Made by <span style={{color: "red"}}>♥</span> albo</Link>
        </footer>
    )
}

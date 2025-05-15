"use client"
import { motion } from "framer-motion"

interface AnimatedNumberProps {
    value: number
}

export default function AnimatedNumber({ value }: AnimatedNumberProps) {
    const digits = value.toLocaleString("pt-BR").split("")
    digits.push(" ", "Km")

    return (
        <div className="flex gap-2">
            {digits.map((digit, index) => (
                <motion.span
                    key={`${digit}-${index}-${value}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: index * 0.03,
                    }}
                >
                    {digit}
                </motion.span>
            ))}
        </div>
    )
}

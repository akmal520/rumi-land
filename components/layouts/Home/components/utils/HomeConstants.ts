import { FaUserTie } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdWork } from "react-icons/md";

interface CardContent {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const CardContent = [
    {
        icon: FaStar,
        title: "Berkualitas",
        description:
            "menghadirkan keindahan, ketahanan, dan kenyamanan dalam setiap detail. Dengan material terbaik dan pengerjaan presisi, hasilnya tak hanya estetis tetapi juga fungsional, memberikan nilai tambah serta kepuasan jangka panjang.",
    },
    {
        icon: MdWork,
        title: "Berpengalaman",
        description: "menghadirkan hasil dengan keahlian yang teruji. Dengan pemahaman mendalam dan praktik terbaik, setiap proses dikerjakan dengan presisi untuk memastikan kualitas, efisiensi, dan kepuasan maksimal.",
    },
    {
        icon: FaUserTie,
        title: "Profesional",
        description:
            "Tenaga ahli dan berpengalaman yang memberikan layanan, mendengarkan dan memberi saran dan solusi terbaik untuk kebutuhan Anda",
    }
];
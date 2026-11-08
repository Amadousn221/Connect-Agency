import Image from "next/image";

interface DataType {
    id: number;
    avatar: string;
    name: string;
    role: string;
}

const SingleTestimonialV3 = ({ data }: { data: DataType }) => {
    const { avatar, name, role } = data;

    return (
        <>
            <div className="swiper-bullet-item">
                <Image src={`/assets/img/teams/${avatar}`} alt="Image Not Found" width={800} height={800} />
                <div className="tm-provider">
                    <div className="content">
                        <h4>{name}</h4>
                        <span>{role}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV3;
import Image from "next/image";

interface StepItemProf {
    imageUrl: string,
    step: string,
    description: string,

}

export default function StepItem(proof) {
    const { imageUrl, step, description } = proof
    return (
        <div className="col-lg-4">
            <div className="card feature-card border-0">
                <Image src={imageUrl} width={80} height={80} />

                <p className="fw-semibold text-2xl mb-2 color-palette-1">
                    { }
                </p>
                <p className="text-lg color-palette-1 mb-0">
                    Top up sesuai dengan
                    <br />
                    nominal yang sudah tersedia
                </p>
            </div>
        </div>
    );
};

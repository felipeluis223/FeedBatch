import Title from '../Title';
import ItemFields from './itemFields';

function RegisterValues(){
    return (
        <section className="w-full]">
            <Title description="Adicionar valores aos Campos" />
            <div className="w-full h-full mt-[15px] gap-[15px] flex flex-col justify-center items-center">
                <ItemFields />
                <ItemFields />
                <ItemFields />
                <ItemFields />
                <ItemFields />
            </div>
        </section>
    )
}

export default RegisterValues;
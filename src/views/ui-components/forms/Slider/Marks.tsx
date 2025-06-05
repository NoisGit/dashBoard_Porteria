import Slider from '@/components/ui/Slider'

const Marks = () => {
    return (
        <div className="my-5">
            <Slider
                defaultValue={40}
                marks={[
                    { value: 20, label: '$20,000' },
                    { value: 50, label: '$50,000' },
                    { value: 80, label: '$80,000' },
                ]}
            />
        </div>
    )
}

export default Marks

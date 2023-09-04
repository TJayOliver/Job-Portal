import One from '../../assets/One.jpg'

const InternBox = ({internshipname, briefinfo}) =>{
    return(
        <div className=" h-96 w-72 rounded-md bg-white shrink-0">
            <img src={One} alt='Internship Flyer' className=' h-[12rem] p-2 rounded-md object-cover' />
            <div className=" grid place-content-center text-center">
                <p className=" font-bold">{internshipname}</p>
                <p className=" p-2">{briefinfo}</p>
            </div>
            <button className=" text-center flex m-auto bg-green-400 p-2 rounded-lg">Learn More</button>
        </div>
    )
}

export default InternBox

InternBox.defaultProps ={
    internshipname: 'World Internships',
    briefinfo : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, deserunt, enim laudantium natus non quo est explicabo. T-Jay Oliver',
}
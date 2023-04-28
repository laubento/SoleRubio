// import { useRouter } from 'next/router';
import { useEffect } from "react"
import dotenv from 'dotenv'
import { data } from "autoprefixer";

export default function Campaign() {



    return (
        <div>
            hola
        </div>
    )
}


export async function getStaticPaths() {
    dotenv.config();
    const name = process.env.CLOUD_NAME;
    const key = process.env.CLOUD_KEY;
    const secret = process.env.CLOUD_SECRET
    let info = ''

    await fetch(`https://api.cloudinary.com/v1_1/${name}/resources/image?max_results=500`, {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + btoa(`${key}:${secret}`)
        }
    })
        .then(response => response.json())
        .then((data) => { return (info = data) })
        .catch(error => console.error('aaaa' + error)) 

        const found = info.resources.map(el => el.folder)
        const newfound = found.filter((value, index) => {
            return found.indexOf(value) === index;
        });
        
        const newName = newfound.map((el) => {
            let split = el.split('/')
            let separate = split[1].split(' ')
            let complete = separate.join('_')
            return complete
        })

        const paths = newName.map((el) => ({
            params: {id: el}
        }))
        // const paths = [{
        //     params: {id: 'el'}
        // }]
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    dotenv.config();
    const name = process.env.CLOUD_NAME;
    const key = process.env.CLOUD_KEY;
    const secret = process.env.CLOUD_SECRET

    let dataComplete = ''

    let nameFound = params.id.split('_')
    let info = 'Sole Rubio/' + nameFound.join(' ')


    await fetch(`https://api.cloudinary.com/v1_1/${name}/resources/image?max_results=500`, {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + btoa(`${key}:${secret}`)
        }
    })
        .then(response => response.json())
        .then((data) => {
            let dataActualice = data.resources.map((el) => {
                // console.log(el.folder)
                return el.folder === info && el.url     
            })
            dataActualice = dataActualice.filter(el => el !== false)
            return (dataComplete = dataActualice)
        })
        .catch(error => console.error(error))

        console.log(dataComplete)

    return {
        props: {
            data: dataComplete
        }
    }
}

import Link from 'next/link'
import {useState, useEffect} from 'react'
import axios from 'axios'
import ErrorMessage from '../components/errormessage'
import SucessMessage from '../components/sucessmessage'
import { NextSeo } from 'next-seo';
import { Image, Grid, Box, Button, Flex, Heading, Tag, Text,
  Popover,
   PopoverTrigger,
   PopoverContent,
   PopoverHeader,
   PopoverBody,
   PopoverFooter,
   PopoverArrow,
   PopoverCloseButton,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
   Input,
   Textarea,
   FormControl,
   CircularProgress,
   useDisclosure
 } from "@chakra-ui/core";


let activitiesArray = ["Tecnología 💻", "Código 👨🏻‍💻", "Streaming 📺", "Podcasts 🔊", "Videojuegos 🎮", "Hackathones 💻", "Música 🎹", "Magia 🧙‍♂️", "Video 📹" ]

export default function Home() {

  const [activities, setActivites] = useState(activitiesArray[0])
  const [status, setStatus] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const { isOpen, onOpen, onClose } = useDisclosure();


   useEffect (() =>{
     let counter = 1;
     setInterval(() => {
        setActivites(activitiesArray[counter])
        counter++
        if(counter >= activitiesArray.length){counter = 0}
      }, 2000);
   }, [])


   let handleSubmit = async (event) => {
     event.preventDefault();
     setStatus("loading")
     try {
       let response = await axios({
         method: 'post', url: 'https://formspree.io/f/mjvpgpga',
         data: {email: email,message: message }
       });
       setStatus("ok")
       setTimeout(function(){ setStatus(""); onClose(); }, 3000);
     } catch (e) {
       setStatus("error")
     }
   }


  return (
    <div className="container">
    <NextSeo
    title="Magiobus.com"
      description="Resuelvo problemas con tecnología, podcasts, audio/video, streaming y código. ¿Necesitas un programador?"
      canonical="https://magiobus.com"
      openGraph={{
        url: 'https://www.magiobus.com',
        title: 'Magiobus.com',
        description: 'Resuelvo problemas utilizando tecnología, podcasts, audio/video, streaming y código',
        images: [
          {
            url: 'https://res-5.cloudinary.com/hjancuipz/image/upload/q_auto/v1/ghost-blog-images/magio-barbon.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          },
          {
            url: 'https://res-5.cloudinary.com/hjancuipz/image/upload/q_auto/v1/ghost-blog-images/magio-barbon.jpg',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
          },
          { url: 'https://res-3.cloudinary.com/hjancuipz/image/upload/q_auto/v1/ghost-blog-images/magiobus-cover-.png' }
        ],
        site_name: 'Magiobus.com',
      }}
      twitter={{
        handle: '@magiobus',
        site: 'http://magiobus.com',
        cardType: 'summary_large_image',
      }}
    />
    <Flex align="center" direction="column" justify="space-evenly">
      <Image
      rounded="full"
      size="150px"
      src="https://res-3.cloudinary.com/hjancuipz/image/upload/q_auto/v1/ghost-blog-images/magiobus-profile-pic3.jpg"
      alt="Magiobus"/>

      <Text fontSize={["3xl", "3xl", "6xl", "6xl"]} my={2}>
        <b>Hola, soy <span id="magiobus">Magiobus</span></b>
      </Text>
      <Text mb={10} ml={5} fontSize={["2xl", "xl", "3xl", "3xl"]}><b>Soluciono problemas con</b> <Tag variantColor="teal"><b>{activities}</b></Tag></Text>
    </Flex>
    
    <Flex direction={["column", "column", "column", "row"]} width="100%" justify="center" align="center">
      <Button mx={2} variantColor="pink" size={["lg"]} width={["90%", "90%", "50%", "12%"]} my={2} ><a href="http://blog.magiobus.com">Blog</a></Button>
      <Button mx={2} variantColor="pink" size={["lg"]} width={["90%", "90%", "50%", "12%"]} my={2}><a href="https://molus.co/portfolio">Portfolio</a></Button>
      <Popover usePortal>
        <PopoverTrigger>
          <Button mx={2} variantColor="pink" size={["lg"]} width={["90%", "90%", "50%", "12%"]} my={2}>Redes</Button>
        </PopoverTrigger>
        <PopoverContent zIndex={4} bg="gray.200">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Button variantColor="teal" size="md" m={2}><a href="http://facebook.com/magiobus">Facebook</a></Button>
            <Button variantColor="teal" size="md" m={2}><a href="http://twitter.com/magiobus">Twitter</a></Button>
            <Button variantColor="teal" size="md" m={2}><a href="http://instagram.com/magiobus">Instagram</a></Button>
            <Button variantColor="teal" size="md" m={2}><a href="https://www.linkedin.com/in/magiobus/">Linkedin</a></Button>
            <Button variantColor="teal" size="md" m={2}><a href="https://github.com/magiobus">Github</a></Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>


      <Button mx={2} variantColor="pink" size={["lg"]} width={["90%", "90%", "50%", "12%"]} my={2} onClick={onOpen}>Contacto</Button>
    </Flex>

    <Modal isOpen={isOpen} onClose={onClose} >
       <ModalOverlay />
       <ModalContent  p={2} rounded="lg" >
         <ModalCloseButton />
         <ModalBody>
           <Flex direction="column">
            <Text m={2} fontSize="xl" color="pink.500"><b>Contáctame!</b></Text>
            <Text m={2} fontSize="xl" color="pink.500" fontSize="sm">
              Puedes encontrarme en todos lados como <Link href="https://linktr.ee/magiobus"><a><b>@magiobus</b></a></Link>!
            </Text>
             <Text m={2} fontSize="xl" color="pink.500" fontSize="sm">
              Aún así, si quieres puedes escribirme directamente acá abajo ⬇️ ⬇️ ⬇️ ⬇️
            </Text>
            {status === 'error' && <ErrorMessage message="Ocurrió un error mandando tu mensaje :(" />}
            {status === 'ok' && <SucessMessage message="He recibido tu mensaje! Gracias!"/>}
            <form  onSubmit={handleSubmit}>
              <FormControl isRequired>
              <Input mt={4} size="lg" type="email" name="email" placeholder="Tu Email" onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl>
              <Textarea mt={4} size="lg" placeholder="Tu mensaje"  isRequired onChange={(e) => setMessage(e.target.value)} />
              </FormControl>
              <Button mt={6} mb={2} width="100%" variantColor="teal"  type="submit">
              {status === 'loading' ? ( <CircularProgress isIndeterminate size="24px" color="teal" /> ) : ( 'Enviar' )}
              </Button>
            </form>
            </Flex>
         </ModalBody>
       </ModalContent>
     </Modal>

      <style jsx>{`

        #magiobus{
          color: #6ac8cf;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title  {
          color: #6ac8cf;
          text-decoration: none;
          margin-bottom: 2em;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #6ac8cf;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

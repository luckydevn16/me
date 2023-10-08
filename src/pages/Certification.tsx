import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react"

import { CERTIFICATIONS } from "../utils/constants"

export default function Certification() {
  
  return (
    <div className="container p-8 mx-auto">
      <Card className="w-full mx-auto mb-8 md:w-1/2">
        <CardBody>
          <p>
            As a dedicated programmer, I am proud to have earned several
            certifications on HackerRank.<br/>
            You can find my profile on HackerRank at <Link href="https://www.hackerrank.com/luckydevn16" target="_blank">https://www.hackerrank.com/luckydevn16</Link>, where you can see my full
            list of certifications and the skills and knowledge I have gained
            through my hard work and dedication.<br/>
            Whether you are an employer looking for a skilled programmer or a fellow coder looking to connect, I invite you to take a look at my profile and see what I can offer.
          </p>
        </CardBody>
      </Card>

      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {CERTIFICATIONS.map((item) => (
          <Card
            shadow="sm"
            key={item.title}
            isPressable
            onPress={() => window.open(item.path)}
          >
            <CardBody className="p-0">
              <Image
                isZoomed
                className="object-cover h-[300px]"
                alt={item.title}
                src={item.img}
              />
            </CardBody>

            <CardFooter className="justify-between text-small">
              {item.title}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

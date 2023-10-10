import { Card, CardBody, CardHeader, Link } from "@nextui-org/react"

export default function About() {
  return (
    <div className="container p-8 mx-auto">
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-wrap justify-between gap-4">
          <div className="flex flex-col gap-4">
            <h4 className="text-xl sm:text-2xl md:text-4xl">Hi! I am</h4>
            <h1 className="text-4xl sm:text-6xl md:text-8xl">Julian Keller</h1>
            <h4 className="text-xl sm:text-2xl md:text-4xl">
              Senior Web Developer
            </h4>
          </div>

          <img className="h-[200px] rounded-full" src="/favicon.jpg" alt="Hero"/>
        </div>

        <Card className="mt-8">
          <CardHeader className="text-xl font-bold">Profile:</CardHeader>
          <CardBody>
            This is Julian Keller, a Senior Web Developer with 8 years of
            experience, based in Lublin, Poland.
            <br />
            I've focused on building lightweight, responsive, and semantic web
            apps with the use of modern technologies and standards.
            <br />
            Furthermore, I love pair programming and sharing my knowledge with
            coworkers.
            <br />
            I also appreciate the Agile method, domain-driven design, and
            working with clients.
            <br />
            I am an open-minded quick learner who's able to develop ingenious
            solutions when faced with obstacles.
            <br />
            <br />
            <div className="flex flex-col">
              <div className="flex gap-4">
                Github:{" "}
                <Link href="https://github.com/luckydevn16" target="_blank">
                  https://github.com/luckydevn16
                </Link>
              </div>
              <div className="flex gap-4">
                HackerRank:{" "}
                <Link
                  href="https://www.hackerrank.com/luckydevn16"
                  target="_blank"
                >
                  https://www.hackerrank.com/luckydevn16
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="mt-8">
          <CardHeader className="text-xl font-bold">Education:</CardHeader>
          <CardBody>
            <div className="flex flex-col gap-4">
              <div className="flex gap-8">
                <div className="whitespace-nowrap w-[120px]">
                  2012/10 - 2015/09
                  <br />
                  Warsaw, Poland
                </div>

                <div>
                  Master's Degree in Computer Science
                  <br />
                  Warsaw University of Technology
                </div>
              </div>

              <div className="flex gap-8">
                <div className="whitespace-nowrap w-[120px]">
                  2007/10 - 2011/06
                  <br />
                  Warsaw, Poland
                </div>

                <div>
                  Bachelor's Degree in Computer Science
                  <br />
                  Warsaw University of Technology
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="mt-8">
          <CardHeader className="text-xl font-bold">
            Work Experience:
          </CardHeader>
          <CardBody>
            <div className="flex flex-col gap-4">
              <div className="flex gap-8">
                <div className="w-32 whitespace-nowrap">2020/05-2022/08</div>

                <div>
                  <ul>
                    <li className="text-lg font-bold">
                      Senior Full-Stack Developer
                    </li>
                    <li className="font-semibold text-md">SameSystem</li>
                    <li>
                      <br />
                    </li>
                    <li>
                      Implemented visual and logical components for front-end
                      applications based on designs provided in React.
                    </li>
                    <li>
                      Designed and implemented a communication API layer on the
                      front and back end. Extended the existing back-end system
                      to incorporate the newly developed module. Implemented an
                      extensible integration mechanism on the back end. Offered
                      general consulting on system design and planning.
                    </li>
                    <li>
                      Refactored one of the running integrations as an exemplary
                      implementation under the new module.
                    </li>
                    <li>
                      <br />
                    </li>
                    <li className="italic">
                      Technologies: React, Redux, Ruby on Rails, GraphQL,
                      Apollo, Node.js, Shell, Architecture, Management, REST
                      APIs, Integration, SQL, Jest, Test-driven Development,
                      Code Review, Ruby Performance, Regex, Ruby, OAuth 2,
                      Python, OOP, REST, Design Patterns, ES6, Storybook, Redis,
                      Tailwind CSS
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-32 whitespace-nowrap">2015/11-2020/04</div>

                <div>
                  <ul>
                    <li className="text-lg font-bold">Full-Stack Developer</li>
                    <li className="font-semibold text-md">Brokerloop</li>
                    <li>
                      <br />
                    </li>
                    <li>
                      Incorporated SMS/MMS marketing features based on the Plivo
                      communication platform to engage the real estate community
                      in Brokerloop networking.
                    </li>
                    <li>
                      Powered up printing marketing campaigns by adding support
                      for rendering custom QR codes to for-sale and rental
                      listings, bio sites, and other resources. Collected
                      metrics for user interaction and presented them in the
                      analytics dashboard.
                    </li>
                    <li>
                      Extended social marketing tools with a cross-posting
                      feature for the brokerage community to promote their
                      brands and run campaigns everywhere on social platforms
                      like Facebook, Instagram, Twitter, and LinkedIn.
                    </li>
                    <li>
                      Mentored the team, shared expertise, ran code reviews,
                      handled on-call DevOps activities in AWS cloud, and
                      managed product releases.
                    </li>
                    <li>
                      <br />
                    </li>
                    <li className="italic">
                      Technologies: JavaScript, TypeScript, Angular, Node.js,
                      Amazon, React, Stripe, YouTube, Video Conferencing, Google
                      APIs, OData, RETS, GitFlow, Agile, Express.js, MySQL,
                      MongoDB, Sequelize, Mongoose, OAuth 2, Docker, Mobile
                      Development
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

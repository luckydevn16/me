import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { LiaHackerrank } from "react-icons/lia";
import { RiMailLine, RiSkypeLine, RiTelegramLine, RiGithubLine } from "react-icons/ri"

export default function Contact() {
  return (
    <div className="container p-8 mx-auto">
      <div className="flex flex-col items-center justify-center">
        <Card className="w-[500px]" shadow="sm">
          <CardHeader className="text-xl font-bold">Contact Me</CardHeader>
          <CardBody>
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <RiMailLine className="text-2xl" />
                <a
                  href="mailto:luckydevn16@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  luckydevn16@gmail.com
                </a>
              </div>

              <div className="flex gap-4">
                <RiSkypeLine className="text-2xl" />
                <a
                  href="https://join.skype.com/invite/vrb1Ds8a7YFK"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lucky DevN16
                </a>
              </div>

              <div className="flex gap-4">
                <RiTelegramLine className="text-2xl" />
                <a
                  href="https://t.me/luckydevn16"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lucky DevN16
                </a>
              </div>

              <div className="flex gap-4">
                <RiGithubLine className="text-2xl" />
                <a
                  href="https://github.com/luckydevn16"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/luckydevn16
                </a>
              </div>

              <div className="flex gap-4">
                <LiaHackerrank className="text-2xl" />
                <a
                  href="https://www.hackerrank.com/luckydevn16"
                  target="_blank"
                  rel="noreferrer"
                >
                  hackerrank.com/luckydevn16
                </a>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

import { Card, CardBody, CardHeader, Progress } from "@nextui-org/react"

import { DATABASE, MOBILE, OTHERS, PROGRAM_LANGUAGES, TOOLS, WEB_BACKEND, WEB_FRONTEND } from "../utils/constants"

export default function Skill() {
  return (
    <div className="container p-8 mx-auto">
      <div className="flex flex-col gap-4 md:gap-8">
        <Card>
          <CardHeader className="text-2xl font-bold">
            Programming Languages
          </CardHeader>

          <CardBody>
            <div className="grid gap-4 md:gap-8 grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {PROGRAM_LANGUAGES.map((item) => (
                <Progress
                  key={item.text}
                  showValueLabel
                  size="md"
                  color="primary"
                  formatOptions={{ style: "percent" }}
                  label={item.text}
                  maxValue={1}
                  value={item.value}
                />
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="text-2xl font-bold">
            Web Frontend
          </CardHeader>

          <CardBody>
            <div className="grid gap-4 md:gap-8 grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {WEB_FRONTEND.map((item) => (
                <Progress
                  key={item.text}
                  showValueLabel
                  size="md"
                  color="success"
                  formatOptions={{ style: "percent" }}
                  label={item.text}
                  maxValue={1}
                  value={item.value}
                />
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="text-2xl font-bold">
            Web Backend
          </CardHeader>

          <CardBody>
            <div className="grid gap-4 md:gap-8 grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {WEB_BACKEND.map((item) => (
                <Progress
                  key={item.text}
                  showValueLabel
                  size="md"
                  color="primary"
                  formatOptions={{ style: "percent" }}
                  label={item.text}
                  maxValue={1}
                  value={item.value}
                />
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="text-2xl font-bold">
            Databases
          </CardHeader>

          <CardBody>
            <div className="grid gap-4 md:gap-8 grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {DATABASE.map((item) => (
                <Progress
                  key={item.text}
                  showValueLabel
                  size="md"
                  color="success"
                  formatOptions={{ style: "percent" }}
                  label={item.text}
                  maxValue={1}
                  value={item.value}
                />
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="text-2xl font-bold">
            Mobile
          </CardHeader>

          <CardBody>
            <div className="grid gap-4 md:gap-8 grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {MOBILE.map((item) => (
                <Progress
                  key={item.text}
                  showValueLabel
                  size="md"
                  color="primary"
                  formatOptions={{ style: "percent" }}
                  label={item.text}
                  maxValue={1}
                  value={item.value}
                />
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="text-2xl font-bold">
            Other
          </CardHeader>

          <CardBody>
            <div className="grid gap-4 md:gap-8 grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {OTHERS.map((item) => (
                <Progress
                  key={item.text}
                  showValueLabel
                  size="md"
                  color="success"
                  formatOptions={{ style: "percent" }}
                  label={item.text}
                  maxValue={1}
                  value={item.value}
                />
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="text-2xl font-bold">
            Tools
          </CardHeader>

          <CardBody>
            <div className="grid gap-4 md:gap-8 grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {TOOLS.map((item) => (
                <Progress
                  key={item.text}
                  showValueLabel
                  size="md"
                  color="primary"
                  formatOptions={{ style: "percent" }}
                  label={item.text}
                  maxValue={1}
                  value={item.value}
                />
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

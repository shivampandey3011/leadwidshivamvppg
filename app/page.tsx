import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Award, BookOpen, Users, MapPin, Clock } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <span className="text-xl font-bold">Shivam Pandey</span>
            <Badge className="ml-2 bg-primary">For Education Officer</Badge>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-6">
              <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </a>
              <a href="#manifesto" className="text-sm font-medium transition-colors hover:text-primary">
                Manifesto
              </a>
              <a href="#why-me" className="text-sm font-medium transition-colors hover:text-primary">
                Why Me
              </a>
              <Button className="bg-primary hover:bg-primary/90">Vote Now</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-0"></div>
        <div className="container relative z-10 py-24 md:py-32 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <Badge className="px-3 py-1 text-sm">Westminster University Elections 2025</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Shivam Harishchandra Pandey</h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Your voice for a better educational experience at Westminster
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Support My Campaign
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QeqOQfXcP9s44tu2J0ekvx5WFgMOiM.png"
                alt="Shivam Harishchandra Pandey"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/50">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge className="mb-4">About Me</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why I'm Running</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="max-w-3xl text-muted-foreground">
              Education has always been at the heart of my journey. Coming from a family deeply involved in academia, I
              have firsthand experience in bridging the gap between students and educators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Class Representative</h3>
                  <p className="text-muted-foreground">
                    Actively representing student concerns and facilitating communication between students and faculty.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Student Partner</h3>
                  <p className="text-muted-foreground">
                    Collaborating on research initiatives to enhance the educational experience at Westminster.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Sports & Fundraising</h3>
                  <p className="text-muted-foreground">
                    Engaged in university cricket and fundraising activities, promoting community and well-being.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge className="mb-4">My Vision</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Will Change at Westminster</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="max-w-3xl text-muted-foreground">
              I am committed to making meaningful improvements to ensure every student's academic experience is
              enriching.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Feedback System"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <h3 className="text-2xl font-semibold">A Stronger, More Engaging Feedback System</h3>
                </div>
                <p className="text-muted-foreground">
                  I believe in actionable feedback that drives real change! I will introduce incentives for Course
                  Representatives to encourage structured feedback collection. A bi-weekly reporting system will ensure
                  student concerns are consistently addressed. I will also enhance UnitU, making it an interactive hub
                  where students can track feedback progress, engage in discussions, and see real-time updates!
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/3">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Canteen Hours"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <h3 className="text-2xl font-semibold">Extended Canteen Hours & Diverse Food Options</h3>
                </div>
                <p className="text-muted-foreground">
                  No student should have to choose between attending a lecture and getting a meal! I will advocate for
                  extended canteen hours and a diverse menu that caters to all dietary needs—vegetarian, vegan,
                  halal—ensuring nutritious, affordable food is always available.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Postgraduate Networking"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <h3 className="text-2xl font-semibold">A Social Hub for Postgraduate Networking</h3>
                </div>
                <p className="text-muted-foreground">
                  Postgraduate students juggle academics and careers, yet networking opportunities are limited. I will
                  create a dedicated social space for collaboration, mentorship, and cultural exchange through regular
                  events and meetups, helping students build lasting connections.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/3">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Student Guide"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <h3 className="text-2xl font-semibold">Free Oyster Cards & A Smarter Student Guide</h3>
                </div>
                <p className="text-muted-foreground">
                  London's high living costs add stress. I will advocate for free Oyster cards and introduce a digital
                  and physical student guide covering university systems, research tools, student benefits, and city
                  navigation—ensuring every student thrives!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section id="why-me" className="py-16 bg-muted/50">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge className="mb-4">My Qualifications</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why I Would Be a Good Officer</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="max-w-3xl text-muted-foreground">
              I believe leadership is defined by action, and my journey reflects that. Beyond my academic engagements, I
              have actively contributed to social and environmental causes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="p-3 rounded-full bg-primary/10 h-fit">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">NGO Leadership</h3>
                    <p className="text-muted-foreground">
                      Running an NGO with 25 volunteers, organizing clean-up drives, and providing rations to shelter
                      homes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="p-3 rounded-full bg-primary/10 h-fit">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fit Thane, Clean Thane</h3>
                    <p className="text-muted-foreground">
                      Launched community initiatives that have shaped me into a proactive, solution-driven individual.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="p-3 rounded-full bg-primary/10 h-fit">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Academic Engagement</h3>
                    <p className="text-muted-foreground">
                      Roles as a class representative and student partner in research demonstrate my commitment to
                      student welfare.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="p-3 rounded-full bg-primary/10 h-fit">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">University Involvement</h3>
                    <p className="text-muted-foreground">
                      Active as a university cricketer and fundraiser, showing my dedication to community building.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="max-w-3xl mx-auto mb-8 text-muted-foreground">
              Being an officer isn't just about holding a position; it's about understanding people, advocating for
              their needs, and taking real steps to improve their experiences. My proactive mindset, coupled with my
              background in education and passion for student welfare, makes me well-equipped for this role.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Vote for Shivam
            </Button>
          </div>
        </div>
      </section>

      {/* Endorsements */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge className="mb-4">Endorsements</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Endorsements</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Academic Society</h3>
                  <p className="text-muted-foreground">
                    Westminster's premier society for academic excellence and student research initiatives.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">International Students Association</h3>
                  <p className="text-muted-foreground">
                    Supporting and representing the diverse international student community at Westminster.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Sports Federation</h3>
                  <p className="text-muted-foreground">
                    Representing all sports clubs and promoting physical wellbeing across the university.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Voting Information */}
          <div className="mt-16 bg-muted/30 rounded-lg p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-2xl font-semibold">How to Vote</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <p>Log in to the Westminster Student Portal using your student credentials</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <p>Navigate to the "Elections" section in the Student Union area</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <p>Select "Education Officer" from the list of positions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      4
                    </div>
                    <p>Cast your vote for Shivam Harishchandra Pandey</p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 space-y-4">
                <h3 className="text-2xl font-semibold">Voting Period</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <p>
                      <span className="font-medium">Starts:</span> April 10, 2025 at 9:00 AM
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <p>
                      <span className="font-medium">Ends:</span> April 17, 2025 at 5:00 PM
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-primary" />
                    <p>
                      <span className="font-medium">Results Announced:</span> April 19, 2025
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="h-5 w-5 text-primary fill-current"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                      <a
                        href="https://instagram.com/leadwidshivam_vppg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                      >
                        @leadwidshivam_vppg
                      </a>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Follow for campaign updates and events</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Vote for Shivam Harishchandra Pandey and help create a better educational experience for all Westminster
            students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Join the Campaign
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Vote Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-xl font-bold">Shivam Pandey</span>
              <Badge className="ml-2">For Education Officer</Badge>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Campaign Rules
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shivam Harishchandra Pandey Campaign. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}


"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"
import { Mail, Phone, Send, Sparkles, ArrowRight, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
})

type FormData = z.infer<typeof formSchema>

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = (data: FormData) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast.success("Message sent!", {
        description: `We'll reach out to you as soon as possible: ${data.email}`,
      })
      form.reset()
    }, 1000)
  }

  return (
    <section id="contact-us" className="py-20 px-4 relative overflow-hidden">
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .animate-slide-in { animation: slideIn 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "6s" }} />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s", animationDelay: "1s" }} />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/40 backdrop-blur-sm mb-8 animate-slide-in">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
            <span className="text-sm font-semibold text-cyan-300">Get In Touch</span>
          </div>
          
          <div className="inline-flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-full blur-lg opacity-30 animate-pulse" />
              <Mail className="w-16 h-16 text-cyan-400 relative animate-bounce" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Contact Us
          </h1>
          <p className="text-slate-300 dark:text-slate-300 max-w-2xl mx-auto text-lg font-light">
            Have questions about our exoplanet research? Reach out to discuss collaborations, feedback, or partnership opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in" style={{ animationDelay: "100ms" }}>
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-white">Contact Information</h2>
              <p className="text-slate-300 font-light">
                Connect with our team for any inquiries related to our exoplanet discovery research.
              </p>
            </div>

            <div className="space-y-5">
              {/* Phone */}
              <div className="group flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-blue-950/40 border border-cyan-500/20 hover:border-cyan-400/60 backdrop-blur-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1">
                <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Phone className="w-6 h-6 text-white animate-float" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1 text-lg">Phone</h3>
                  <p className="text-slate-300 font-light">+94 70 698 8230</p>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-purple-950/40 to-blue-950/40 border border-purple-500/20 hover:border-purple-400/60 backdrop-blur-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
                <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Mail className="w-6 h-6 text-white animate-float" style={{ animationDelay: '0.2s' }} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1 text-lg">Email</h3>
                  <a href="mailto:research@exoplanet.ai" className="text-cyan-400 hover:text-cyan-300 transition-colors font-light">
                    research@exoplanet.ai
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="group flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-cyan-950/40 border border-emerald-500/20 hover:border-emerald-400/60 backdrop-blur-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1">
                <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <MapPin className="w-6 h-6 text-white animate-float" style={{ animationDelay: '0.4s' }} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1 text-lg">Location</h3>
                  <p className="text-slate-300 font-light">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="rounded-3xl bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-slate-900/50 border border-cyan-500/20 p-10 shadow-2xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 backdrop-blur-xl animate-slide-in group"
              style={{ animationDelay: "200ms" }}
            >
              <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-2">
                <Send className="w-6 h-6 text-cyan-400" />
                Send us a Message
              </h2>
              
              <div className="grid gap-6">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-slate-200 text-sm uppercase tracking-wide">First Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John" 
                            className="rounded-xl border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400/30 bg-slate-950/50 backdrop-blur-sm text-white placeholder:text-slate-500 font-light transition-all duration-300" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-slate-200 text-sm uppercase tracking-wide">Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Doe" 
                            className="rounded-xl border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400/30 bg-slate-950/50 backdrop-blur-sm text-white placeholder:text-slate-500 font-light transition-all duration-300" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-slate-200 text-sm uppercase tracking-wide">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john@example.com" 
                          type="email" 
                          className="rounded-xl border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400/30 bg-slate-950/50 backdrop-blur-sm text-white placeholder:text-slate-500 font-light transition-all duration-300" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-slate-200 text-sm uppercase tracking-wide">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="How can we help?" 
                          className="rounded-xl border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400/30 bg-slate-950/50 backdrop-blur-sm text-white placeholder:text-slate-500 font-light transition-all duration-300" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-slate-200 text-sm uppercase tracking-wide">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your inquiry..." 
                          className="min-h-[140px] rounded-xl border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400/30 bg-slate-950/50 backdrop-blur-sm text-white placeholder:text-slate-500 resize-none font-light transition-all duration-300" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-xl py-4 flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0 group/btn text-base"
                >
                  <Send className="w-5 h-5 group-hover/btn:-translate-y-1 transition-transform" />
                  {isLoading ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default Contact
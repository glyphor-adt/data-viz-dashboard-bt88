import React from 'react'
import { Zap, Shield, TrendingUp } from 'lucide-react'

const Features = () => {
  const featuresData = [
    {
      icon: Zap,
      title: 'Real-Time Data Integration',
      description: 'Connect to any data source and visualize updates as they happen. Support for APIs, databases, and streaming services.',
    },
    {
      icon: Shield,
      title: 'Secure and Compliant',
      description: 'Enterprise-grade security with data encryption, access controls, and audit logs. Compliant with SOC 2, GDPR, and HIPAA.',
    },
    {
      icon: TrendingUp,
      title: 'AI-Powered Insights',
      description: 'Automatically detect anomalies, forecast trends, and generate actionable recommendations. Improve decision-making with intelligent analytics.',
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="bg-background rounded-xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <feature.icon className="h-8 w-8 text-primary mb-4" aria-hidden="true"/>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

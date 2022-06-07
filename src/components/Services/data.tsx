import {
  IconCamera,
  IconCode,
  IconDirection,
  IconGrid,
  IconVideo
} from 'assets'

interface ServiceProps {
  icon: React.ReactNode
  name: string
  description: string
  color: 'blue' | 'red' | 'yellow'
}

const data: ServiceProps[] = [
  {
    icon: <IconCode />,
    color: 'blue',
    name: 'Development',
    description: 'Create a platform with the best and coolest quality from us.'
  },
  {
    icon: <IconGrid />,
    color: 'red',
    name: 'UI/UX Designer',
    description:
      'We provide UI/UX Design services, and of course with the best quality'
  },
  {
    icon: <IconCode />,
    color: 'yellow',
    name: 'Graphik Designer',
    description: 'We provide Graphic Design services, with the best designers'
  },
  {
    icon: <IconDirection />,
    color: 'yellow',
    name: 'Motion Graphik',
    description: 'Create a platform with the best and coolest quality from us.'
  },
  {
    icon: <IconCamera />,
    color: 'blue',
    name: 'Photography',
    description:
      'We provide Photography services, and of course with the best quality'
  },
  {
    icon: <IconVideo />,
    color: 'red',
    name: 'Videography',
    description: 'Create a platform with the best and coolest quality from us.'
  }
]

export default data

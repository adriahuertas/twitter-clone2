"use client"

import { Card, CardHeader, CardBody, CardFooter, Avatar } from "@nextui-org/react"
import Link from "next/link"
import { IconMessageCircle2, IconHeart, IconRepeat } from '@tabler/icons-react'

const PostCard = ({ userName, avatarUrl, userFullName, content }: { userFullName: string, avatarUrl: string, userName: string, content: string }) => {
  return (
    <Card className="bg-transparent shadow-none cursor-pointer rounded-none hover:bg-slate-800 transition duration-200 border-b border-white/20">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Link href={`/${userName}`}>
            <Avatar radius="full" size="md" src={avatarUrl} />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{userFullName}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{userName}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-white">
        <p>
          {content}
        </p>

      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle2 size={20} />
        </button>
        <button>
          <IconHeart size={20} />
        </button>
        <button>
          <IconRepeat size={20} />
        </button>
      </CardFooter>
    </Card>
  )
}

export default PostCard

"use client";

import { getPlatformList } from "@/app/context/PlatformList";
import ConnectionCard from "@/components/ConnectionCard";
import { AlertCircle } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

function Connect() {
    const { refresh } = getPlatformList();

    useEffect(() => {
        refresh();
    },[])

    return (
        <>
        <div className="flex-1 space-y-6 p-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Connect</h1>
                    <p className="text-muted-foreground">Manage your OAuth integrations with external services</p>
                </div>
            </div>
            <div className="border border-gray-400 rounded-md p-4 flex items-start gap-3 bg-white text-gray-900">
            <AlertCircle className="h-6 w-6 text-gray-600 flex-shrink-0" />
                <div>
                    <h3 className="font-semibold mb-1">Integration Information</h3>
                    <p className="text-sm">
                    Connect your accounts to enable data synchronization and enhanced analytics capabilities. All connections are
                    secured with OAuth 2.0 protocol.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap gap-12 justify-center p-5">
                <ConnectionCard
                name="Youtube"
                description="Access YouTube analytics and channel management"
                icon={
                    <Image
                    src="/youtube-logo.png"
                    alt="Youtube"
                    width={100}
                    height={100}
                    className="h-8 w-8"
                    />
                }
                permissionInfo="https://myaccount.google.com/permissions"
                />
                <ConnectionCard
                name="Twitter"
                description="Manage tweets, followers, and engagement analytics"
                icon={
                    <Image
                    src="/twitter-logo.png"
                    alt="Twitter"
                    width={100}
                    height={100}
                    className="h-7 w-8 mt-1"
                    />
                }
                permissionInfo="https://myaccount.google.com/permissions"
                />
                <ConnectionCard
                name="Instagram"
                description="Access post insights, stories, and audience analytics"
                icon={
                    <Image
                    src="/instagram-logo.png"
                    alt="Instagram"
                    width={100}
                    height={100}
                    className="h-8 w-8"
                    />
                }
                permissionInfo="https://myaccount.google.com/permissions"
                />
                <ConnectionCard
                name="Facebook"
                description="Manage posts, page insights, and follower analytics"
                icon={
                    <Image
                    src="/facebook-logo.png"
                    alt="Facebook"
                    width={100}
                    height={100}
                    className="h-8 w-8"
                    />
                }
                permissionInfo="https://myaccount.google.com/permissions"
                />
                <ConnectionCard
                name="Linkedin"
                description="Track posts, professional reach, and audience engagement"
                icon={
                    <Image
                    src="/linkedin-logo.png"
                    alt="LinkedIn"
                    width={100}
                    height={100}
                    className="h-8 w-8 rounded"
                    />
                }
                permissionInfo="https://myaccount.google.com/permissions"
                />
            </div>
        </div>
        </>
    );
}

export default Connect;
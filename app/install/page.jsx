import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { MoreVertical, Share } from 'lucide-react'

export default function install() {
    return (
        <div className="flex justify-center">
            <div className="mx-10 max-w-[750px] text-justify mb-6">
                <h1>Install Fatigue Diary</h1>
                <p>Fatigue Diary is a PWA which means you can install it on any device (Android and IOS). Depending on your browser, the following steps may vary so select the browser and operating system you are using.</p>
                <br />
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Download for IOS</AccordionTrigger>
                        <AccordionContent>
                            <ol className="list-decimal" style={{ listStyleType: "decimal !important" }}>
                                <li>Open Safari and go to www.fatiguediary.ch</li>
                                <li style={{ display: "inline" }}>Click on the share ( <span style={{ verticalAlign: "middle" }}><Share /></span>) icon.</li>
                                <li>Click "Add to Home Screen".</li>
                                <li>Confirm the name of the app.</li>
                                <li>Click "Add".</li>
                            </ol>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Download for Android (Chrome, Opera, Brave)</AccordionTrigger>
                        <AccordionContent>
                            <ol className="list-decimal" style={{ "list-style-type": "decimal !important" }}>
                                <li>Open your browser and go to www.fatiguediary.ch</li>
                                <li className="inline-block">Click on the three dots (<MoreVertical />).</li>
                                <li>Click "Add to Home Screen".</li>
                                <li>Confirm the name of the app.</li>
                                <li>Click "Add".</li>
                            </ol>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Download for Android (Firefox)</AccordionTrigger>
                        <AccordionContent>
                            <ol className="list-decimal" style={{ "list-style-type": "decimal !important" }}>
                                <li>Open Firefox and go to www.fatiguediary.ch</li>
                                <li className="inline-block">Click on the three dots (<MoreVertical />).</li>
                                <li>Click "Install".</li>
                                <li>Confirm the name of the app.</li>
                                <li>Click "Add".</li>
                            </ol>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

            </div>
        </div>
    )
}

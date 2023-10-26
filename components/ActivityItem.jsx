import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EyeOff, Pencil, Trash2 } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
    dialogClose,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { LoaderButton } from '@/components/ui/loaderButton'

export default function ActivityItem({ children, activityId, selectedActivities, setSelectedActivities, style, isEditing, isHidden = false, fetchActivities }) {
    function selectActivity(e) {
        if (!isEditing) {
            let selectedActivitiesTemp = [...selectedActivities];

            if (selectedActivitiesTemp.includes(activityId)) {
                selectedActivitiesTemp.splice(selectedActivitiesTemp.indexOf(activityId), 1)
                setSelectedActivities(selectedActivitiesTemp)
            }
            else {
                selectedActivitiesTemp.push(activityId)
                setSelectedActivities(selectedActivitiesTemp)
            }
        }
    }

    async function hide() {
        let URL = "http://localhost:3000"
        // change hidden state in db
        let res = await fetch(URL + "/api", {
            method: "POST",
            body: JSON.stringify({
                "type": "toggleActivityVisibility",
                "activityId": activityId,
                "state": !isHidden,
            }),
        })
        await fetchActivities();
    }

    if (!isEditing) {
        return <li className="border rounded min-h-[44px] flex items-center justify-center text-center cursor-pointer select-none px-1" style={style} onClick={selectActivity}>{children}</li>
    }
    else {
        return (
            <Dialog>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <li className="border rounded min-h-[44px] flex items-center justify-center text-center cursor-pointer select-none px-1" style={style} onClick={selectActivity}>{children}</li>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mt-[-20px]">
                        <DropdownMenuLabel>Edit {children}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><Pencil className="h-3 w-3" />&nbsp;Edit</DropdownMenuItem>
                        <DropdownMenuItem onClick={async () => await hide()}><EyeOff className="h-3 w-3" />&nbsp;Hide</DropdownMenuItem>
                        <DialogTrigger className="w-full">
                            <DropdownMenuItem className="text-destructive"><Trash2 className="h-3 w-3" />&nbsp;Delete</DropdownMenuItem>
                        </DialogTrigger>
                    </DropdownMenuContent>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="text-left">Are you sure?</DialogTitle>
                            <DialogDescription className="text-left">
                                Do you want to delete the activity "{children}"? Deleting this activity will remove it from all entries that were already created. This action cannot be undone! You can also just hide the activity so it will not be removed from past entries.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="flex flex-row justify-between">
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <LoaderButton>Delete</LoaderButton>
                        </DialogFooter>
                    </DialogContent>
                </DropdownMenu>
            </Dialog>
        )
    }
}

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { CalendarIcon } from "@radix-ui/react-icons";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { CarouselImage } from "@/components/shared/CarouselImage";

const SingleRecipe = () => {
  const params = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/recipes/${params.id}`
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log("Error fetching recipe: ", error);
      }
    };
    fetchRecipe();
  }, []);

  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@nextjs</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@nextjs</h4>
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="flex items-center pt-2">
                <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      <CarouselImage  />
    </div>
  );
};

export default SingleRecipe;

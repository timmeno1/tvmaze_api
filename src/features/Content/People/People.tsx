import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../app/hooks";
import { useGetPeopleMutation } from "../../../app/services/people/peoplePageApi";
import { HomeGridItem } from "../../../components/HomeGridItem";
import { setPeopleArray } from "./people.reducer";

export const People = () => {
  const isMobile = useAppSelector((state) => state.mobileDetect.isMobile);

  const dispatch = useDispatch();
  const people = useAppSelector((state) => state.peoplePage.people);
  const [getPeople, { isLoading, data }] = useGetPeopleMutation();

  useEffect(() => {
    if (people.length < 19) {
      getPeople(null);
      if (data) {
        dispatch(setPeopleArray(data));
      }
    }
  }, [people, data, getPeople]);

  return (
    <div className="container p-2 md:p-4">
      <h2 className="font-semibold dark:text-white text-xl md:text-2xl  mb-3 md:mb-6">
        Popular people
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
        {!isMobile
          ? people.map((person) => (
              <HomeGridItem
                id={person.id}
                mediaType={person.mediaType}
                key={person.id}
                imgUrl={person.profile_path}
                title={person.name}
                year={123}
                rating={123}
              />
            ))
          : people.map((person) => (
            <HomeGridItem
              id={person.id}
              mediaType={person.mediaType}
              key={person.id}
              imgUrl={person.profile_path}
              title={person.name}
              year={123}
              rating={123}
            />
          ))}
      </div>
    </div>
  );
};

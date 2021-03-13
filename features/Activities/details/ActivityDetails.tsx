import React from 'react';
import { Text, ScrollView } from 'react-native';
import ActivitYDetailsChat from './ActivityDetailsChat';
import ActivityDetailsHeader from './ActivityDetailsHeader';
import ActivitYDetailsInfo from './ActivityDetailsInfo';
import ActivitYDetailsAttendee from './ActivityDetailsAttendee';


export default function ActivityDetails(){


    return(
        <ScrollView>
           <ActivityDetailsHeader />
           <ActivitYDetailsInfo />
           <ActivitYDetailsAttendee />
           <ActivitYDetailsChat />
        </ScrollView>
    )
}
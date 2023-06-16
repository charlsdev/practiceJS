import { DateTime } from "luxon";

DateTime
  .local()
  .toFormat('yyyy-MM-dd')

DateTime
  .fromISO('2023-03-08T14:20:50.000Z')
  .toFormat('yyyy LLL dd')

DateTime
  .fromISO('2023-03-08T14:20:50.000Z')
  .toFormat('yyyy-MM-dd')

DateTime
  .fromISO('2023-03-08T14:20:50.000Z')
  .toFormat('f')

DateTime
  .now()
  .toFormat("HH 'hours and' mm 'minutes'")

DateTime
  .fromISO('2023-03-08T14:20:50.000Z')
  .setLocale('en')
  .toFormat('yyyy LLLL dd')

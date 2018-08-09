import { ajax } from 'rxjs/ajax'
import { of, from } from 'rxjs'
import { filter, map, tap, delay } from 'rxjs/operators'
import * as R from 'ramda'

export const fetchData = (
    url,
    method='GET',
    body,
    responseType='json',
    headers={
    'Content-Type': 'application/json'
    }
) => ajax({
    url : 'https://dev-api.stefanini-spark.com/accounts?pageSize=10',
    crossDomain: true,
  })

// TODO Add a swithMap here to r

/* eslint-disable */
import projects from '@/constants/projects';
import tools from '@/constants/tools';
import { Project, Tool } from '@/models';
import router from '@/router';

export function getProject(
  routeName: string | null = router.currentRoute.name + ''
): Project {
  return projects.filter((x: Project) => x.routeName === routeName)[0];
}

export function getTools(
  type: Tool['type'],
  toolsArray: Tool[] = Object.values(tools)
): Tool[] {
  return toolsArray
    .filter(x => x.type === type)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function formatDate(time: any): string {
  switch (typeof time) {
    case 'number':
      break;
    case 'string':
      time = +new Date(time);
      break;
    case 'object':
      if (time.constructor === Date) time = time.getTime();
      break;
    default:
      time = +new Date();
  }
  const timeFormats = [
    [60, 'seconds', 1], // 60
    [120, '1 minute ago', '1 minute from now'], // 60*2
    [3600, 'minutes', 60], // 60*60, 60
    [7200, '1 hour ago', '1 hour from now'], // 60*60*2
    [86400, 'hours', 3600], // 60*60*24, 60*60
    [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
    [604800, 'days', 86400], // 60*60*24*7, 60*60*24
    [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
    [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
    [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
    [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
    [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
    [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
    [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
    [58060800000, 'centuries', 2903040000], // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
  ];
  let seconds = (+new Date() - time) / 1000,
    token = 'ago',
    listChoice = 1;

  if (seconds == 0) {
    return 'Just now';
  }
  if (seconds < 0) {
    seconds = Math.abs(seconds);
    token = 'from now';
    listChoice = 2;
  }
  let i = 0,
    format;
  while ((format = timeFormats[i++]))
    if (seconds < format[0]) {
      if (typeof format[2] == 'string') return (format as any)[listChoice];
      else
        return Math.floor(seconds / +format[2]) + ' ' + format[1] + ' ' + token;
    }
  return time;
}

export function setCookie(name, value): void {
  document.cookie = `${name}=${value};path=/`;
}

export function getCookie(cname): string | null {
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

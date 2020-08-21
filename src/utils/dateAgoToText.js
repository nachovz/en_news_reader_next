const dateAgoToText = (date=(new Date())) => {
    var seconds = Math.floor(( new Date(Date.now()) - date ) / 1000);
    var interval = Math.floor(seconds / 31536000);
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return `hace ${interval} día${interval > 1 ? 's': ''}`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return `hace ${interval} hora${interval > 1 ? 's': ''}`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return "hace "+interval + " minutos";
    }
    return "hace " + Math.floor(seconds) + " segundos";
  }

	export default dateAgoToText;
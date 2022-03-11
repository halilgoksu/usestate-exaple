const data = () => [
  {
    id: 1,
    name: "Elon Musk",
    age: 50,
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUQEBIVDxUQFRUVFRAVDw8PFRUVFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFw8PFS0fHiAuKy0uKy0tLysvLS0wLS0tMisrLS0tMC0rNysrLSsrLS0tLS8tLS0tLS0tLS0tLS0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAQIDBAUGBwj/xAA+EAACAQIDBQUFBgQFBQAAAAAAAQIDEQQhMQUSQVFhBiJxgZETMqGxwQcjUmLR8BRC4fEzU3KywhUWVKKj/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAJREBAQACAQMDBAMAAAAAAAAAAAECEQMEEiExQVEUMnGBEyJh/9oADAMBAAIRAxEAPwD4qgBCZVSbAVwuAwAEAAMAoAAAAA2UNmVp0Z4iEHKnSkozmldRcldXAwjSNNLA1JaRfi0/7mylsSclfeSyvfOz8CbizG32ctDNOJwE4Z5TWecXfTnxMqBrQABNhAhtkLgVDuAhASuJsTZFsBtkbgIBgIAGAhgWDACoAAYCsOwx2AiMlYLARuFx2ERVlCg5vLhm3wR2sFjKtGlOhSnPdrW36UW7Tkvd3kuV9DDK8IqEdXZylq89F8T1HZTZMW/avvO2nK5jLLTvxcfddOdgth4/EQtBSsnm3NRTtwvxz+R1KHYnaNtP/orfM+h7JilaNrLkkkeko0Va5x77XvvTYYzza/P+OwNbCVNyrB05a2a1TyunxRxsVTcptxi887JZdT732y2BDF0HG3fh3qcuT5eD0f8AQ+O7TqPDpxhldWlF3yfNdDphlt5Obi7fw84yI2I6vIBDEACAQAIAAQAAAAAAAAAXAAyoBoRJANInGIoo14encsiWqVTFKmfQuzP2b43HUlWpxhCnK+7OpPdUrZOySb1yvaxxu1PZTE4CahiIbm8rxaalGSWrTXy1NaTbyTiQaNFWJQzFadOit6KfGS+Xd+h7bYSVCmnwauzyGGpx9lB5q+V21nKybt62PbbF3GlGeatmjjyej6PTY+XZwG16s7OjSg0v8yvCk3blc9LsrbXtd6DhuTp+9C6dstU1k11Rx9m9nMNKaqqEJtZ9+O/Zrir6eBmUo0Mao0lZS7kkk7fvM4/h7e226ruYjbc5O0MNOcFrU36cbLmoN7z9D4v28dsZUUdG1LllNKf1PsS7N0t51Et1670ZVE0072tvWfLTTI+S/abS3cfK34Yf7Ujpx+rydVNYft5JiBiZ3fNAgEwAAEACAAAAAAAACAAAC4YAVQSREkgiyBvwbsznxZooTzNRmv1v2XxdKrg6MqLi4qnCNo5KLUUnG3BrkeG+3HEUnhqVLuyqKpvc5RiotPwTuvQ+fdmtr1qUd2nVnTTabUZyirrjZcSW26kqt5Tk5ylrJttvxbNzj99sd3s8BiNTNI6G0KNmznSOeTpHoezi9rD2eV6MvaZ8YvJ/X4HpnC0lu+B8/wBn1d2pF83Z+bPW1cc1N21TvY5Zx9Dp+SWavs9/2exk1GUZZWRy9pbCqV66rQxPslvb27KSs+Hd6+IbC2nGtGpRqRlByipRmuKzTXxI4DYsVKSqYWVZ37tVv2ia4PvvI888V9GWZR7LBxlRglvuqs7ylbO7umrZdD4j9odff2hV/Kqcf/RS/wCR9b2bsiOEheDnCOd6Lk5Rztmr+678suh8V7W4lVcbXms06lk/9KUP+J04/ueTrb/ST/XIYmAju+WBAACAAAQAAAAAEAAAAAABeAAVQMQwJJl+H1M6NGG1LGa9RsqpY6lad0cPASsdCpiIxV5NLxZ3l8OVnlytpUTg1oWO1jdoRllFX6vL4HPj3mccrHXGVlw1PvxvleUV6tHodqUZRm5WyT979TjqDTuuDuvI99VwO9ThUS7tSMZRla6akk7M453T29NjMtx5jC7WrU92VOV3DTw5Poes2X9orit2rTd1xjb68DzOL2RUTcoRe6tfyv6o7PZbY0a2c1dp6u7VuiOd09OM5JdSuh2q7aV5YP2lODpKpL2cZNq95Rk3JW1sk/No+Ttn1j7UaKjhaCjHuRq2l4bkldfE+VYik4ScXw0fNczeEmnk6m3v1arEAjo8wABAAAAAIAAAAAAAAAAAAvAAKAAABo1YczRNVFZMI3Rrytk7eBRJtvPPqKjUzs8iUo525jbWkYq4NSi8lvLiuPiiyPHpkV0pO1nwfzAlM9LsTtbVo0o0ZU4V6cE0oyUoySveynF9XqmeYm0aacI7qad78PqumRLJfVvHK43cr6Nsztds2Sca9GtS31ZpONaC8GrS+BfLtbszD54eNWs+Spqkum85PLyTPmwjH8cdvqeT5dbtFt2tjpXq2jBXUaMW92Kerb1lJ8/keeppSW5UV93K7+DNqMmLW61LyZqeHDK2+ayYjZ7WcXfo/wBTDJWyeXQ7UW3kV1aCllLyfErOnIEaMRhJQz1XP+hnCAAABAMQAAAAAABAAXAC8uwmFnWnGlSi6k5u0YRV230KTtdktqfwuKjV591vkm1+hLfDpx4y5SW6ijbewcTg5KOIp7jlo95SXhdcTmn3LtTgY7QwEnC0pJb0ZdVmfD3Fp2eTWTXUzhl3R26ngnFlqegiaoQdk72M0EbY/h9Do80WSo3zWRKSaefIh7J6xbXx+Aq9VuOeT0DSdNdy/wCJtldrWfkzRBd1IpcdUBXVphQck1HedvHhy8MtCad18H4gtSI1oGThEcoBpArrw3otFm6KwGCi3bqsn5F2bIuG7Nr8SuWU9QyU7NJtXT7r8/38TjVIbsmuTa9GdurC0JLz9LP6HO2pR3Z73CefnxBWIAAIBDEAAAAAAAAAAB7L7NsRh6eOj/ER39+LhCNk+/JpceNrrzPadqPs2jXlKthbUZa+yatGTb6aeR8p2fipUasK0fepSjNeMXdH3HsZ2sntC/dzhFOayTWdsuZyz3LuPodNcM8Lx5MHYPZGOwt6OKi4paK6lFrozk/ar2OjCP8AHYeKSX+NBf7/ANT6hUq7yTvdaX5PkyjGUYVaU6VTOM4uLXSSsc8cvO3o5MN4dlfm3D01beZqkllldcyyvg3RqTo6ulOUG+bi2r/AcIJcbeh6XydaWxtbn8zmYuXe6X/dzVUlbS8vBr9TnVptyu1YJXUw0u6VtZlOHq5Fm8FK9n0ll58CaWZVXV4v1RdhJb8d7jo11QGyLyXgTZG2hIKi0KxOwkgrHiPfj5oaiVYt/ex8WaAyJZrPr8jDtSLlBS4J/PLI01l1yb5oniIqdOUU+Hy0+QR54AAIBDABAMAEAwAQDAC86/ZnbdTB11UhJxUspeHA44EsaxyuN3H3rs326w9SKhWycv51Zpvqz1tKEKkd6lLeT4PJn5lp4p0XC2atvNdW9fGx7Ts92xnh2oqW/Teibacf6HO8fw+hx9TMvu8Vj+0PZsqO0KrknapaorTlHKSs8tPeUjy0lG+Vl+Wam/rmek7ZdoHi68XwpJxT1vvNN/vxOE5Lw9OPyZ0x9Hi5dd90onJrL3OsabXxZjcr8b9Wa5VJSk45WS+ZiiiuTTReRpgzLSNMWFWWyKcHU9nV3XpP58C6Jnx1PigOzFkqeZlwGIU4X4rXxRooyy8Q1E2JMepFhXNxj+9h4myaOdi5feR8TpMMstaUVbeyu+Rcnbhk+KsZMXWSai2llfNNr95EaOKkst1SX5JKXwCOfiKe7Nrk8vDh8Co3bRalaUeCtJWs1yuvUwsIAAAAAAAL8LhKlV7tOEqj5Ri368jf2b2Q8XWVPe3IrOUunJdT7h2c2JRw1OMacFHrbN9WzGWWno4eC5+b4j4l/wBsY7/x5+kf1A/QW8Bjvr1fRY/NfmoBAdnzVmMldxf5V9SuFR6Ik1deOXg9USoUms35AXRdrLkFR3TXG31IDXMptOlG3Uprxs78y9EasblRXSNETPTL0zLS6JZVheJXFl0XlYK5+FqezqdJZP6M69KXDkcrEQTzutbNX72mTtyOlTeQI0b5CvPIimV4iQVzcVL7yPkdZaHHxGdSPijsyDLkV23N5J5205ZE6UI6yenl6WMim233tW2Xwq2CNrzXedvFXb5q3AxfwMdXKy4ZZjnVtlq3q+XRC3+fBWSCqp4RXylfxVhSw6/FfyJ3v9RSkEQ9jFc2SUVyC4XIr6X2Q2dGNCjKEFvThGUpcW3f9Ue9oUqlunI+V9n+1MaFOnCX8sIxv4HvNl9q6Mo5z+Jwyl2+tw5Y9kkrtezl09GBk/6/h/xr1QGdO+359EMD1PgmNCGgiSJogiSKJpkytFrKRW45khXLEjLR0nmaZmWmrSNtZZBWCcFvrqzoQRij7y6XNcZpAixalNbUkpfvMhVA51SX3kf9S+Z2auj8GcTE++vFfM7dbR+DCOBF5dRRn8PmILriGT3hb4WQmkAb4b4rCsFS3ye8VXC4EpvP0JwxM1pJodO2629UigG1/wDF1Pxy9RmcCaXuvytGAFQEkRJIIkiRBEkUTiTcunxIwGwsRi8y1MquTiyKtpLM11pWj4IywdmbJWtcKw0NXo7ZXTun4eheVKSRbGb/AA366ATiQqviWRdyGIWn9gOVitfM7slfzODi2dynO8YvmkEcGxEuxEbTkur+ZUGUWIkxAIQ2AUgYAACGACAAAuGAAMYgRUSQxIYFsdAY+BG4qixOmiJKJFXwLZvIhSJSV8gK41odOWvIvhUv7rjYxvZ7Wjugjh7cQrbKXN/CxGorqxnVZ6LPzSG5te9Hd9AOdidTr4Gd6Ueit6ZHJxc03kb9lS+7tyb/AFCM+PX3j62fwRmZt2ku8nzXybMTKyTENiIExDAKQhgAgAAEMVhgWgMCoYACAaGJDQGiVtCLgOeZGLJWgSiIEwNdLQV03Zq68LkaUsiqvSmnvJP5fFAaHhv8ubX5W2vgJUqj99vLqszKsZbJ7680y2GJv/PLzigNL7qt7NyT5K5jq+0nrGy8To4OWai/5r/ySV7Z6seITXDJ+AVwasLGzZMspLwZTiVnmS2U+9Jc18mGV+0FknybXr/YwnSxUb030szmlKiwGxEQhDACIMbEwpAMEAgAALgACoEMAAaAYAaCuoAEaNaDQABZT/fobaXugAGDHFNIACN+D96Hi/8AbI14zRfvgAFVwq3vMnsz/E8n9AAiN9X3JeDOWwApSYCAiEDAApMTGACAAAAAAP/Z",
  },
  {
    id: 2,
    name: "Jennifer Lawrence",
    age: 31,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Jennifer_Lawrence_in_2016.jpg/330px-Jennifer_Lawrence_in_2016.jpg",
  },
  {
    id: 3,
    name: "Donald Trump",
    age: 75,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/330px-Donald_Trump_official_portrait.jpg",
  },
  {
    id: 4,
    name: "Johnny Sins",
    age: 43,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Guy%2C_Ava_Lauren_at_XRCO_Awards_2007_1_%28cropped%29.jpg/330px-Guy%2C_Ava_Lauren_at_XRCO_Awards_2007_1_%28cropped%29.jpg",
  },
  {
    id: 5,
    name: "Snoop Dogg",
    age: 50,
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Snoop_Dogg_2019_by_Glenn_Francis.jpg/330px-Snoop_Dogg_2019_by_Glenn_Francis.jpg"  },
];
export default data;

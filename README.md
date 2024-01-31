# Hausaufgabe Interaction Design ZHdK, Thema: "im-Moment"

## Description/general idea:

peaceful atmospheric images/environment to get a break from a busy day, to relax with, to get lost in, and to tune out. 

## To-Do:

### <ins>Ideas:</ins>

- [ ] Birds flying by

- [x] night sky --> draw stars
  - [ ] Make stars move (optional)
  - [ ]

- [ ] rain --> draw clouds

- [x] evening --> draw airplane with trail
  - make trail dissapear after a while

- [ ] figure out pixelate filter --> for rain
- [ ] Parallax clouds


- [ ] Foreground of window?
- [ ] unpixelated images --> photoshop out windows

### <ins>Infrastructure:</ins>

- [ ] look into luminesce masks

- [ ] Sort files into canvas/effects and scenes (with both)

- [ ] some pixel color movement

- [ ] Figure out how to make it centered on screen
- [ ] Figure out how to host from github?
- [ ] figure out how to render on my nextjs page?

- [ ] slider to fade between?

- [ ] Research workflow --> look into https://github.com/aleha84/simple.canvas.core2?tab=readme-ov-file
- [ ] Figure out a good project structure

### <ins>Completed:</ins>
- [x] Figure out how to make it fill screen (resizing up and down)
- [x] Add buttons/toggles for all 5 images
- [x] Move rain to different file?
- [x] Fade between images -> maybe make two canvases?
- [x] smoke not working at all
- [x] Set "default" size for smoke canvas --> something like 1500px by 1500px, and then scale based on that
  - test 2000 or 2500 or 3000 px
  - test not square aspect ratio (1:2)
- [x] Figure out testing buttons (rain/smoke etc on second row)

### Ideas for images:

- [ ] Night --> northern lights, stars
- [ ] Half night --> smoking chimneys
- [ ] Clouds --> rain (or snow) --> check out lightinggenerator
- [ ] Day --> small clouds, airplanes (?)


- [x] Different times of day (day/night)
- [ ] Different weather (rain/cloudy/sunny etc)

- [x] Smoking chimneys
- [x] Rain
- [ ] Snow?
- [ ] aurora borealis 
- [ ] Liminal spaces

### <ins>Illustrator/Photoshop:</ins>
- [ ] Pixel value: 6
- [ ] png for layers
- [ ] svg to canvas converter

### <ins>HTML5 Canvas:</ins>
- [x] Test html5 canvas

### <ins>Mind-Map:</ins>

```mermaid
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#850FA6',
      'primaryTextColor': '#fff',
      'primaryBorderColor': '#fff',
      'lineColor': '#fff',
      'secondaryColor': '#850FA6',
      'tertiaryColor': '#850FA6'
    }
  }
}%%
mindmap
    )Thema: "im Moment"(

        ((Wallpaper))
            (vectorbased?)
                (Illustrator maybe convert to pixelart)
                    (Convert to svg and create canvas to animate/scale)

            [art style:] 
                (cartoon-y)
                (pixelated)
                ("lofi")

            (2/3 different variants maybe seasons)

            (look into glsl)

            (html5 canvas + js.)

        ((Pixel art))

            (draw in photoshop/illustrator)

            (google for atmospheric landscapes/cozy images)


```
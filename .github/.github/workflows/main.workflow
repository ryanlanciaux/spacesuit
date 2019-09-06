workflow "Validate" {
  resolves = [
    "Install",
    "Publish"
  ]
  on = "push"
}

action "Install" {
  uses = "Borales/actions-yarn@0.0.1"
  args = "install"
}

action "Publish" {
  needs = "Install"
  uses = "Borales/actions-yarn@0.0.1"
  args = "publish:packages"
}

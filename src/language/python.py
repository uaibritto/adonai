import unittest

class MovieSearchBar(Gtk.Box):
    def __init__(self, location):
        Gtk.Box.__init__(self, orientation = Gtk.Orientation.HORIZONTAL)

        self.genres = []
        self.friends = []
        self.rating = 0
        self.db = Database(location)

def printme( str ):
   "This prints a passed string into this function"
   print str
   return;

printme("Again second call to the same function")

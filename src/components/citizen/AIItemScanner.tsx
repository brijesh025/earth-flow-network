import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Camera, 
  Upload, 
  Scan,
  CheckCircle,
  AlertCircle,
  Info,
  Star,
  Leaf,
  Recycle,
  Award,
  Zap,
  QrCode,
  Image as ImageIcon
} from "lucide-react";

const AIItemScanner = () => {
  const [scanningState, setScanningState] = useState<'idle' | 'scanning' | 'analyzing' | 'result'>('idle');
  const [scanResult, setScanResult] = useState<any>(null);

  const startCamera = () => {
    setScanningState('scanning');
    // Simulate camera activation and scanning
    setTimeout(() => {
      setScanningState('analyzing');
      setTimeout(() => {
        setScanResult({
          item: "Plastic Water Bottle",
          category: "PET Plastic",
          recyclable: true,
          confidence: 96,
          points: 15,
          co2Impact: "0.2kg CO₂ saved",
          instructions: [
            "Remove cap and label",
            "Rinse with water",
            "Crush to save space",
            "Drop at nearest plastic collection point"
          ],
          nearestCenter: {
            name: "Green Hands Recycling Center",
            distance: "0.8 km",
            bonusPoints: 1.2
          },
          funFact: "This bottle can be recycled into 5 new bottle caps or clothing fiber!"
        });
        setScanningState('result');
      }, 2000);
    }, 1000);
  };

  const uploadImage = () => {
    // Simulate file upload and analysis
    setScanningState('analyzing');
    setTimeout(() => {
      setScanResult({
        item: "Glass Jar",
        category: "Clear Glass",
        recyclable: true,
        confidence: 94,
        points: 20,
        co2Impact: "0.3kg CO₂ saved",
        instructions: [
          "Remove all labels and lids",
          "Clean thoroughly",
          "Separate by color if possible",
          "Take to glass collection bin"
        ],
        nearestCenter: {
          name: "Community Glass Point",
          distance: "1.2 km",
          bonusPoints: 1.5
        },
        funFact: "Glass can be recycled infinitely without losing quality!"
      });
      setScanningState('result');
    }, 2000);
  };

  const resetScanner = () => {
    setScanningState('idle');
    setScanResult(null);
  };

  const confirmRecycling = () => {
    // Simulate adding points and recording activity
    alert(`Great! You've earned ${scanResult.points} points for recycling a ${scanResult.item}!`);
    resetScanner();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-4">AI Item Scanner</h2>
        <p className="text-lg text-muted-foreground">
          Scan or upload images of items to get instant recycling guidance and earn points
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Scanner Interface */}
          <Card className="shadow-strong border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="h-5 w-5 mr-2" />
                Item Scanner
              </CardTitle>
              <CardDescription>
                Point your camera at any item to identify if it's recyclable
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Camera/Upload Area */}
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                {scanningState === 'idle' && (
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Camera className="h-12 w-12 text-primary" />
                    </div>
                    <p className="text-muted-foreground mb-4">Ready to scan items</p>
                    <div className="flex gap-2 justify-center">
                      <Button onClick={startCamera} className="flex-1">
                        <Camera className="h-4 w-4 mr-2" />
                        Start Camera
                      </Button>
                      <Button variant="outline" onClick={uploadImage} className="flex-1">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Image
                      </Button>
                    </div>
                  </div>
                )}

                {scanningState === 'scanning' && (
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <Scan className="h-12 w-12 text-primary animate-spin" />
                    </div>
                    <p className="text-primary font-medium">Scanning item...</p>
                    <p className="text-sm text-muted-foreground">Hold steady for best results</p>
                  </div>
                )}

                {scanningState === 'analyzing' && (
                  <div className="text-center">
                    <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-12 w-12 text-accent animate-pulse" />
                    </div>
                    <p className="text-accent font-medium">AI Analyzing...</p>
                    <div className="w-full max-w-xs mx-auto mt-4">
                      <Progress value={75} className="h-2" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Processing with computer vision</p>
                  </div>
                )}

                {scanningState === 'result' && scanResult && (
                  <div className="text-center p-4">
                    <div className={`w-16 h-16 ${scanResult.recyclable ? 'bg-success/20' : 'bg-destructive/20'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      {scanResult.recyclable ? (
                        <CheckCircle className="h-8 w-8 text-success" />
                      ) : (
                        <AlertCircle className="h-8 w-8 text-destructive" />
                      )}
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{scanResult.item}</h3>
                    <Badge variant={scanResult.recyclable ? "default" : "destructive"} className="mb-4">
                      {scanResult.recyclable ? "Recyclable" : "Non-Recyclable"}
                    </Badge>
                    <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span>Confidence: {scanResult.confidence}%</span>
                      <span>•</span>
                      <span className="text-success font-medium">+{scanResult.points} points</span>
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={confirmRecycling} className="flex-1">
                        <Star className="h-4 w-4 mr-2" />
                        Confirm & Earn Points
                      </Button>
                      <Button variant="outline" onClick={resetScanner}>
                        Scan Another
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm">
                  <QrCode className="h-4 w-4 mr-2" />
                  QR Scan
                </Button>
                <Button variant="outline" size="sm">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Bulk Upload
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results & Information */}
          <div className="space-y-6">
            {scanResult && (
              <>
                {/* Item Details */}
                <Card className="shadow-medium border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Info className="h-5 w-5 mr-2" />
                      Item Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Category:</span>
                        <p className="font-medium">{scanResult.category}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Points Value:</span>
                        <p className="font-medium text-success">+{scanResult.points} points</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">CO₂ Impact:</span>
                        <p className="font-medium text-success">{scanResult.co2Impact}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Nearest Center:</span>
                        <p className="font-medium">{scanResult.nearestCenter.distance}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recycling Instructions */}
                <Card className="shadow-medium border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Recycle className="h-5 w-5 mr-2" />
                      How to Recycle
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3">
                      {scanResult.instructions.map((instruction: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium text-primary">{index + 1}</span>
                          </div>
                          <span className="text-sm">{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>

                {/* Fun Fact */}
                <Card className="shadow-medium border-0 bg-gradient-secondary">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Leaf className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Did You Know?</h4>
                        <p className="text-sm text-muted-foreground">{scanResult.funFact}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {/* Recent Scans */}
            <Card className="shadow-medium border-0">
              <CardHeader>
                <CardTitle>Recent Scans</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { item: "Aluminum Can", points: 25, time: "2 hours ago" },
                    { item: "Paper Magazine", points: 10, time: "1 day ago" },
                    { item: "Glass Bottle", points: 20, time: "2 days ago" }
                  ].map((scan, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{scan.item}</p>
                        <p className="text-xs text-muted-foreground">{scan.time}</p>
                      </div>
                      <Badge variant="outline">+{scan.points} pts</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <Card className="shadow-medium border-0 max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="h-5 w-5 mr-2" />
            Scanning Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium mb-2">Good Lighting</h4>
              <p className="text-sm text-muted-foreground">Ensure adequate lighting for better recognition</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
              <h4 className="font-medium mb-2">Clean Items</h4>
              <p className="text-sm text-muted-foreground">Clean items scan better and are worth more points</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-medium mb-2">Multiple Angles</h4>
              <p className="text-sm text-muted-foreground">Try different angles for complex items</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-warning" />
              </div>
              <h4 className="font-medium mb-2">Bonus Points</h4>
              <p className="text-sm text-muted-foreground">Rare items and perfect scans earn bonus points</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIItemScanner;

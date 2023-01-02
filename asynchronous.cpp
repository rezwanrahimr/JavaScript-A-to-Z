#include <iostream>
#include <unistd.h>
int getVar(){
    int x = 12;
    sleep(3);
    return x;
}
int main(){
    int value = getVar();
    std::cout << "The value is: " << value;
}
